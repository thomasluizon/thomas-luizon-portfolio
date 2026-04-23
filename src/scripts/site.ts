import { content, defaultLocale, locales, type Locale } from "../data/content";

const COOKIE_KEY = "thomas_portfolio_locale";

const isLocale = (value: string | null): value is Locale =>
  !!value && locales.includes(value as Locale);

const readCookie = (name: string): string | null => {
  const entry = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));
  return entry ? decodeURIComponent(entry.split("=")[1]) : null;
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

  const descriptionTags = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
  );

  descriptionTags.forEach((tag) => {
    tag.setAttribute("content", meta.description);
  });

  const titleTags = document.querySelectorAll<HTMLMetaElement>(
    'meta[property="og:title"], meta[name="twitter:title"]',
  );

  titleTags.forEach((tag) => {
    tag.setAttribute("content", meta.title);
  });
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

  const menuLabel = document.querySelector<HTMLElement>("[data-menu-label]");
  if (menuLabel) {
    const navPanel = document.querySelector<HTMLElement>("[data-mobile-nav]");
    const isOpen = navPanel ? !navPanel.hasAttribute("hidden") : false;
    menuLabel.textContent = isOpen ? dictionary.nav.close : dictionary.nav.menu;
  }

  updateMeta(locale);
  writeCookie(COOKIE_KEY, locale);
  currentLocale = locale;
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
  const menuLabel = document.querySelector<HTMLElement>("[data-menu-label]");
  if (!toggle || !panel) return;

  const sync = (open: boolean) => {
    panel.toggleAttribute("hidden", !open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-open", open);
    if (menuLabel) {
      menuLabel.textContent = open ? content[currentLocale].nav.close : content[currentLocale].nav.menu;
    }
  };

  toggle.addEventListener("click", () => {
    const open = panel.hasAttribute("hidden");
    sync(open);
  });

  panel.querySelectorAll<HTMLAnchorElement>("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => sync(false));
  });
};

const initNavigationState = () => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  if (!sections.length || !links.length) return;
  const header = document.querySelector<HTMLElement>("[data-site-header]");

  const setActive = (id: string) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const getActiveSection = () => {
    const headerOffset = header?.getBoundingClientRect().height ?? 0;
    const marker = window.scrollY + headerOffset + window.innerHeight * 0.22;
    let fallback = sections[0];

    for (const section of sections) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (marker >= top && marker < bottom) {
        return section;
      }

      if (marker >= top) {
        fallback = section;
      }
    }

    return fallback;
  };

  const sync = () => {
    const activeSection = getActiveSection();
    setActive(activeSection.id);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  window.addEventListener("load", sync);
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

const initOrbitModeWithoutMotion = () => {
  const orbitSection = document.querySelector<HTMLElement>("[data-orbit-section]");
  if (!orbitSection) return;

  const body = document.body;
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      body.classList.toggle("orbit-mode", !!entry?.isIntersecting);
    },
    {
      threshold: 0.4,
    },
  );

  observer.observe(orbitSection);
};

const initOrbitStepsWithoutMotion = () => {
  const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-orbit-step]"));
  const slides = Array.from(document.querySelectorAll<HTMLElement>("[data-orbit-slide]"));
  if (!steps.length || !slides.length) return;

  const setActive = (index: number) => {
    steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
  };

  steps.forEach((step, index) => {
    step.addEventListener("click", () => setActive(index));
    step.addEventListener("focus", () => setActive(index));
  });
};

const initMotion = async () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initOrbitStepsWithoutMotion();

  if (prefersReducedMotion) {
    initOrbitModeWithoutMotion();
    document.documentElement.classList.add("motion-safe-ready");
    return;
  }

  const gsapModule = await import("gsap");
  const scrollTriggerModule = await import("gsap/ScrollTrigger");
  const gsap = gsapModule.default || gsapModule.gsap;
  const { ScrollTrigger } = scrollTriggerModule;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("[data-hero-line]", {
    opacity: 0,
    y: 32,
    duration: 0.9,
    stagger: 0.14,
    ease: "power3.out",
    clearProps: "all",
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 34,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
      },
      clearProps: "opacity,transform",
    });
  });

  const orbitSection = document.querySelector<HTMLElement>("[data-orbit-section]");
  if (orbitSection) {
    ScrollTrigger.create({
      trigger: orbitSection,
      start: "top 55%",
      end: "bottom 45%",
      onEnter: () => document.body.classList.add("orbit-mode"),
      onEnterBack: () => document.body.classList.add("orbit-mode"),
      onLeave: () => document.body.classList.remove("orbit-mode"),
      onLeaveBack: () => document.body.classList.remove("orbit-mode"),
    });
  }

  const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-orbit-step]"));
  const slides = Array.from(document.querySelectorAll<HTMLElement>("[data-orbit-slide]"));

  if (steps.length && slides.length) {
    let activeIndex = 0;

    gsap.set(slides, {
      autoAlpha: 0,
      scale: 0.985,
    });

    gsap.set(slides[0], {
      autoAlpha: 1,
      scale: 1,
    });

    const setActive = (index: number) => {
      if (index === activeIndex) return;

      activeIndex = index;

      steps.forEach((step, stepIndex) => {
        step.classList.toggle("is-active", stepIndex === index);
      });

      slides.forEach((slide, slideIndex) => {
        gsap.to(slide, {
          autoAlpha: slideIndex === index ? 1 : 0,
          scale: slideIndex === index ? 1 : 0.985,
          duration: slideIndex === index ? 0.55 : 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    steps.forEach((step, index) => {
      step.addEventListener("click", () => setActive(index));
      step.addEventListener("focus", () => setActive(index));

      ScrollTrigger.create({
        trigger: step,
        start: "top 68%",
        end: "bottom 52%",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      });
    });
  }

  document.documentElement.classList.add("motion-safe-ready");
};

applyLocale(currentLocale);
initLanguageToggle();
initMobileMenu();
initNavigationState();
initContactForm();
void initMotion();
