import { content, defaultLocale, locales, type Locale } from "../data/content";

const COOKIE_KEY = "thomas_portfolio_locale";

const isLocale = (value: string | null): value is Locale =>
  !!value && locales.includes(value as Locale);

const readCookie = (name: string): string | null => {
  const entry = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));
  return entry ? decodeURIComponent(entry.split("=")[1] ?? "") : null;
};

const writeCookie = (name: string, value: string) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
};

const resolvePath = (source: unknown, path: string): unknown =>
  path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object") {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);

const detectLocale = (): Locale => {
  const stored = readCookie(COOKIE_KEY);
  if (isLocale(stored)) return stored;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : defaultLocale;
};

let currentLocale: Locale = detectLocale();

const updateMeta = (locale: Locale) => {
  const meta = content[locale].meta;
  document.title = meta.title;

  document
    .querySelectorAll<HTMLMetaElement>(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((tag) => {
      tag.setAttribute("content", meta.description);
    });

  document
    .querySelectorAll<HTMLMetaElement>('meta[property="og:title"], meta[name="twitter:title"]')
    .forEach((tag) => {
      tag.setAttribute("content", meta.title);
    });
};

const isMenuOpen = () => {
  const panel = document.querySelector<HTMLElement>("[data-mobile-nav]");
  return !!panel && !panel.hasAttribute("hidden");
};

const syncMenuLabel = () => {
  const menuLabel = document.querySelector<HTMLElement>("[data-menu-label]");
  const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const label = isMenuOpen() ? content[currentLocale].nav.close : content[currentLocale].nav.menu;

  if (menuLabel) {
    menuLabel.textContent = label;
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-label", label);
  }
};

const applyLocale = (locale: Locale) => {
  const dictionary = content[locale];
  document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";

  document.querySelectorAll<HTMLElement>("[data-copy]").forEach((element) => {
    const key = element.dataset.copy;
    if (!key) return;

    const value = resolvePath(dictionary, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-copy-placeholder]")
    .forEach((element) => {
      const key = element.dataset.copyPlaceholder;
      if (!key) return;

      const value = resolvePath(dictionary, key);
      if (typeof value === "string") {
        element.placeholder = value;
      }
    });

  document.querySelectorAll<HTMLElement>("[data-copy-aria]").forEach((element) => {
    const key = element.dataset.copyAria;
    if (!key) return;

    const value = resolvePath(dictionary, key);
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  const localeDisplay = document.querySelector<HTMLElement>("[data-locale-display]");
  if (localeDisplay) {
    localeDisplay.textContent = locale === "pt-BR" ? "PT" : "EN";
  }

  updateMeta(locale);
  writeCookie(COOKIE_KEY, locale);
  currentLocale = locale;
  syncMenuLabel();
};

const initLanguageToggle = () => {
  const toggle = document.querySelector<HTMLButtonElement>("[data-locale-toggle]");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    applyLocale(currentLocale === "en" ? "pt-BR" : "en");
  });
};

const initMobileMenu = () => {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-mobile-nav]");
  if (!toggle || !panel) return;

  const sync = (open: boolean) => {
    panel.toggleAttribute("hidden", !open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-open", open);
    syncMenuLabel();
  };

  toggle.addEventListener("click", () => {
    sync(panel.hasAttribute("hidden"));
  });

  panel.querySelectorAll<HTMLAnchorElement>("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => sync(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") sync(false);
  });
};

const initNavigationState = () => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  if (!sections.length || !links.length) return;

  const header = document.querySelector<HTMLElement>("[data-site-header]");

  const setActive = (id: string) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.navLink === id);
    });

    sections.forEach((section) => {
      section.classList.toggle("is-active", section.id === id);
    });
  };

  const sync = () => {
    const headerOffset = header?.getBoundingClientRect().height ?? 0;
    const marker = window.scrollY + headerOffset + window.innerHeight * 0.24;
    let active = sections[0];

    sections.forEach((section) => {
      if (marker >= section.offsetTop) {
        active = section;
      }
    });

    setActive(active.id);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
};

const initScrollProgress = () => {
  const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (!progress) return;

  let scheduled = false;
  const sync = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, Math.max(0, window.scrollY / max));
    progress.style.transform = `scaleX(${ratio})`;
    scheduled = false;
  };

  const requestSync = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(sync);
  };

  sync();
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
};

const initContactForm = () => {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  const status = document.querySelector<HTMLElement>("[data-contact-status]");
  const submitLabel = document.querySelector<HTMLElement>("[data-submit-label]");
  if (!form || !status || !submitLabel) return;

  const setStatus = (kind: "success" | "error" | "idle", message = "") => {
    status.dataset.state = kind;
    status.textContent = message;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitLabel.textContent = content[currentLocale].contact.form.submitting;
    setStatus("idle");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      setStatus("success", content[currentLocale].contact.form.success);
    } catch (error) {
      console.error(error);
      setStatus("error", content[currentLocale].contact.form.error);
    } finally {
      submitLabel.textContent = content[currentLocale].contact.form.submit;
    }
  });
};

const initMotion = async () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add("motion-ready");
    return;
  }

  const gsapModule = await import("gsap");
  const scrollTriggerModule = await import("gsap/ScrollTrigger");
  const gsap = gsapModule.default || gsapModule.gsap;
  const { ScrollTrigger } = scrollTriggerModule;

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "[data-hero-line]",
    { y: 30 },
    {
      y: 0,
      duration: 0.68,
      stagger: 0.08,
      ease: "power3.out",
      clearProps: "transform",
    },
  );

  gsap.fromTo(
    ".site-header",
    { y: -16 },
    {
      y: 0,
      duration: 0.62,
      ease: "power3.out",
      clearProps: "transform",
    },
  );

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true,
        },
        clearProps: "opacity,transform",
      },
    );
  });

  gsap.utils.toArray<HTMLElement>(".page-section").forEach((section) => {
    const shell = section.querySelector<HTMLElement>(".section-shell");
    if (!shell || section.id === "home") return;

    gsap.fromTo(
      shell,
      { y: 44 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 28%",
          scrub: 0.45,
        },
        clearProps: "transform",
      },
    );
  });

  gsap.utils
    .toArray<HTMLElement>(".capability-list li, .principle-row, .orbit-stack-list li")
    .forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0.42, x: -14 },
        {
          opacity: 1,
          x: 0,
          duration: 0.54,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true,
          },
          clearProps: "opacity,transform",
        },
      );
    });

  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
    gsap.to(element, {
      y: -42,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.45,
      },
    });
  });

  document.documentElement.classList.add("motion-ready");
};

applyLocale(currentLocale);
initLanguageToggle();
initMobileMenu();
initNavigationState();
initScrollProgress();
initContactForm();
void initMotion();
