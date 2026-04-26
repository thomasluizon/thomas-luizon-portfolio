export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export interface LocaleContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    principles: string;
    orbit: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    proofLabel: string;
    proofItems: string[];
  };
  about: {
    label: string;
    question: string;
    title: string;
    narrative: string[];
    capabilityLabel: string;
    capabilities: string[];
  };
  principles: {
    label: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  orbit: {
    label: string;
    title: string;
    subtitle: string;
    roleLabel: string;
    roleValue: string;
    intro: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    steps: Array<{
      label: string;
      title: string;
      body: string;
    }>;
    links: {
      website: string;
      app: string;
    };
  };
  contact: {
    label: string;
    title: string;
    body: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
  };
}

export const content: Record<Locale, LocaleContent> = {
  en: {
    meta: {
      title: "Thomas Luizon | Software Engineer",
      description:
        "Software engineer building production systems, digital products, and Orbit with backend, cloud, frontend, and AI applied with product thinking.",
    },
    nav: {
      about: "About",
      principles: "Principles",
      orbit: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Software Engineer",
      title: "Thomas Luizon",
      summary:
        "I design and build reliable software across backend, cloud, frontend, and AI, turning complex technical decisions into products people can use with clarity.",
      primaryCta: "Contact",
      secondaryCta: "Projects",
      proofLabel: "Selected proof",
      proofItems: [
        "6+ years shipping production systems",
        "AI, cloud, and infrastructure depth",
        "TypeScript and .NET across the stack",
        "Founder and solo developer of Orbit",
      ],
    },
    about: {
      label: "About",
      question: "Who am I?",
      title: "About me",
      narrative: [
        "I am a software engineer who likes the full path from architecture to interface. My work usually connects backend reliability, cloud infrastructure, frontend execution, and practical AI features.",
        "I care about products that feel simple because the system underneath is well designed. Good APIs, clear data flows, and thoughtful UI decisions should work together instead of competing for attention.",
        "Orbit is the clearest example of that approach: a real product built across app, backend, AI flows, brand, and launch execution.",
      ],
      capabilityLabel: "Technologies I work with most",
      capabilities: [
        "C#, .NET Core, ASP.NET Core, Python",
        "TypeScript, React, Vue.js, Next.js, Nuxt.js",
        "AWS, Azure, AppConfig, Lambda, API design",
        "SQL Server, Redis, Kafka, BFF, CI/CD",
      ],
    },
    principles: {
      label: "Principles",
      title: "How I make decisions.",
      intro: "",
      items: [
        {
          title: "AI has to earn its place.",
          body: "If AI goes into the product, it should make a task clearer, faster, or easier.",
        },
        {
          title: "Good architecture keeps the team moving.",
          body: "I prefer systems that are easy to understand, easy to change, and boring in the right places.",
        },
        {
          title: "Frontend and backend should be designed together.",
          body: "The product feels better when interface, data model, and API decisions pull in the same direction.",
        },
        {
          title: "Ownership means staying with the problem.",
          body: "I like following the work from product decisions to rollout and the tradeoffs in between.",
        },
      ],
    },
    orbit: {
      label: "Featured project",
      title: "Orbit",
      subtitle: "AI habits, real routines, and product execution in one system.",
      roleLabel: "Role",
      roleValue: "Founder & solo developer",
      intro:
        "Orbit combines mobile UX, applied AI, backend architecture, and a focused brand system. This section uses the actual app screens and the visual language from the Orbit landing page.",
      stats: [
        {
          label: "AI UX",
          value: "Chat-to-habit flows that feel practical instead of performative.",
        },
        {
          label: "Product strategy",
          value: "Daily behavior design focused on clarity, consistency, and retention.",
        },
        {
          label: "Technical rigor",
          value: "Cross-platform delivery backed by clean APIs and operational thinking.",
        },
        {
          label: "Execution",
          value: "Founder-speed shipping without letting product quality slip.",
        },
      ],
      steps: [
        {
          label: "01",
          title: "From idea to routine",
          body: "Describe what you want to build. Orbit turns it into habits, schedules, and smaller actions.",
        },
        {
          label: "02",
          title: "Built for repeated use",
          body: "Daily check-ins, plan adjustments, and momentum without a noisy interface.",
        },
        {
          label: "03",
          title: "Shipped as one product system",
          body: "App, backend, website, brand, and launch work were treated as one product from day one.",
        },
      ],
      links: {
        website: "Visit Orbit",
        app: "Open the app",
      },
    },
    contact: {
      label: "Contact",
      title: "Get in touch.",
      body:
        "If you need a software engineer for AI-heavy products with strong systems and product taste, let's talk.",
      emailLabel: "Direct email",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
        submitting: "Sending...",
        success: "Message sent. I'll get back to you soon.",
        error:
          "The form could not be submitted right now. Please email me directly.",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@company.com",
        messagePlaceholder: "Tell me what you're building.",
      },
    },
  },
};
