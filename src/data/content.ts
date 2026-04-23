export const locales = ["en", "pt-BR"] as const;
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
    languageLabel: string;
    workTogether: string;
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
  footer: {
    status: string;
    rights: string;
    builtWith: string;
  };
}

export const content: Record<Locale, LocaleContent> = {
  en: {
    meta: {
      title:
        "Thomas Luizon | Senior Product Engineer building AI-first products",
      description:
        "Senior product engineer focused on AI, cloud, infrastructure, and user experience. Explore Thomas Luizon's work and the Orbit case study.",
    },
    nav: {
      about: "About",
      principles: "Principles",
      orbit: "Orbit",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      languageLabel: "Switch language",
      workTogether: "Let's work together",
    },
    hero: {
      eyebrow: "Senior Product Engineer",
      title: "AI-first products with engineering rigor.",
      summary:
        "Over 6 years shipping cloud-native systems across .NET, TypeScript, AWS, and Azure, with strong product judgment and an obsessive focus on experiences that stay clear in real use.",
      primaryCta: "Let's work together",
      secondaryCta: "View my main project",
      proofLabel: "Selected proof",
      proofItems: [
        "6+ years in production engineering",
        "AI, cloud, and infrastructure depth",
        "TypeScript and .NET across the stack",
        "Founder and solo developer of Orbit",
      ],
    },
    about: {
      label: "About",
      title: "Product intuition, AI systems, and backend rigor.",
      narrative: [
        "My work sits at the intersection of product engineering, cloud architecture, and user experience. I design systems that stay maintainable under real business pressure and still feel sharp to the person using them.",
        "My foundation is deep in C#, .NET Core, ASP.NET Core, Azure, SQL Server, Kafka, and event-driven systems. On top of that, I build polished frontend experiences with TypeScript, React, Vue.js, Next.js, and Nuxt.js.",
        "I care about best practices because they directly affect speed, reliability, and product quality. The goal is not architecture theater. The goal is to ship better products, faster, with cleaner systems underneath them.",
      ],
      capabilityLabel: "Core capability surface",
      capabilities: [
        "C#, .NET Core, ASP.NET Core, Python",
        "TypeScript, React, Vue.js, Next.js, Nuxt.js",
        "AWS, Azure, AppConfig, Lambda, API design",
        "SQL Server, MongoDB, Redis, Kafka, BFF, CQRS",
        "CI/CD, accessibility, SSR, automated testing",
      ],
    },
    principles: {
      label: "Principles",
      title: "How I build matters as much as what I build.",
      intro:
        "I optimize for products that feel clear to the user and resilient to the team maintaining them.",
      items: [
        {
          title: "AI should remove friction, not create spectacle.",
          body: "I treat AI as product infrastructure. It should make workflows faster, clearer, and more useful rather than becoming a gimmick layered on top.",
        },
        {
          title: "System design exists to improve product velocity.",
          body: "Microservices, BFFs, event-driven flows, and cloud tooling only matter when they make delivery safer, faster, and easier to evolve.",
        },
        {
          title: "UX quality and backend quality are the same job.",
          body: "A great interface fails if the data model, API contract, or operational path behind it is fragile. I build both sides together.",
        },
        {
          title: "Ownership means carrying decisions to production.",
          body: "I care about the full path: architecture, implementation, rollout, debugging, communication, and the product tradeoffs in between.",
        },
      ],
    },
    orbit: {
      label: "Featured project",
      title: "Orbit",
      subtitle:
        "AI-powered habit tracking built with product judgment, founder ownership, and systems discipline.",
      roleLabel: "Role",
      roleValue: "Founder & solo developer",
      intro:
        "Orbit is where I bring together AI UX, cross-platform product thinking, architecture, and execution speed. It is not a demo. It is a product shaped end to end by one engineer with clear product standards.",
      stats: [
        {
          label: "AI UX",
          value: "Chat-to-habit flows that feel usable, not theatrical.",
        },
        {
          label: "Product strategy",
          value: "Daily behavior design anchored in retention and clarity.",
        },
        {
          label: "Technical rigor",
          value: "Cross-platform delivery with clean backend and operational thinking.",
        },
        {
          label: "Execution",
          value: "Founder-speed shipping without sacrificing product quality.",
        },
      ],
      steps: [
        {
          label: "01",
          title: "From prompt to plan",
          body: "Orbit turns natural language into habit structures, schedules, and sub-habits that feel coherent immediately.",
        },
        {
          label: "02",
          title: "A real execution surface",
          body: "The product supports daily use with streaks, focus, categorization, and a UI that stays calm under repeat usage.",
        },
        {
          label: "03",
          title: "Built as a real product system",
          body: "I treated Orbit like a product company would: UX, architecture, branding, launch materials, and operational polish.",
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
        "If you need a senior product engineer who can ship AI-heavy products with strong backend systems and product taste, reach out.",
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
    footer: {
      status: "Available for full-time roles and selected consulting work.",
      rights: "Thomas Luizon",
      builtWith: "Astro, GSAP, and a fully custom front-end rebuild.",
    },
  },
  "pt-BR": {
    meta: {
      title:
        "Thomas Luizon | Senior Product Engineer construindo produtos AI-first",
      description:
        "Senior product engineer com foco em IA, cloud, infraestrutura e experiência do usuário. Conheça o trabalho de Thomas Luizon e o case do Orbit.",
    },
    nav: {
      about: "Sobre",
      principles: "Princípios",
      orbit: "Orbit",
      contact: "Contato",
      menu: "Menu",
      close: "Fechar",
      languageLabel: "Mudar idioma",
      workTogether: "Vamos trabalhar juntos",
    },
    hero: {
      eyebrow: "Senior Product Engineer",
      title: "Produtos AI-first com rigor de engenharia.",
      summary:
        "Mais de 6 anos entregando sistemas cloud-native com .NET, TypeScript, AWS e Azure, com forte visão de produto e foco obsessivo em experiências realmente usáveis.",
      primaryCta: "Vamos trabalhar juntos",
      secondaryCta: "Ver meu projeto principal",
      proofLabel: "Provas selecionadas",
      proofItems: [
        "Mais de 6 anos em engenharia de produção",
        "Profundidade em IA, cloud e infraestrutura",
        "TypeScript e .NET em toda a stack",
        "Founder e solo developer do Orbit",
      ],
    },
    about: {
      label: "Sobre",
      title: "Visão de produto, sistemas de IA e rigor de backend.",
      narrative: [
        "Meu trabalho acontece na interseção entre product engineering, arquitetura em cloud e experiência do usuário. Eu desenho sistemas que continuam sustentáveis sob pressão real de negócio e ainda parecem refinados para quem os utiliza.",
        "Minha base é profunda em C#, .NET Core, ASP.NET Core, Azure, SQL Server, Kafka e sistemas orientados a eventos. Em cima disso, construo experiências front-end polidas com TypeScript, React, Vue.js, Next.js e Nuxt.js.",
        "Eu valorizo boas práticas porque elas afetam diretamente velocidade, confiabilidade e qualidade do produto. O objetivo não é arquitetura por vaidade. O objetivo é entregar produtos melhores, mais rápido, com sistemas mais limpos por trás.",
      ],
      capabilityLabel: "Superfície principal de capacidade",
      capabilities: [
        "C#, .NET Core, ASP.NET Core, Python",
        "TypeScript, React, Vue.js, Next.js, Nuxt.js",
        "AWS, Azure, AppConfig, Lambda, APIs",
        "SQL Server, MongoDB, Redis, Kafka, BFF, CQRS",
        "CI/CD, acessibilidade, SSR e testes automatizados",
      ],
    },
    principles: {
      label: "Princípios",
      title: "Como eu construo importa tanto quanto o que eu construo.",
      intro:
        "Eu otimizo para produtos que sejam claros para o usuário e resilientes para o time que precisa mantê-los.",
      items: [
        {
          title: "IA deve remover atrito, não criar espetáculo.",
          body: "Eu trato IA como infraestrutura de produto. Ela precisa tornar fluxos mais rápidos, claros e úteis em vez de virar um enfeite.",
        },
        {
          title: "System design existe para aumentar a velocidade do produto.",
          body: "Microsserviços, BFFs, fluxos orientados a eventos e tooling em cloud só importam quando tornam a entrega mais segura, mais rápida e mais simples de evoluir.",
        },
        {
          title: "Qualidade de UX e qualidade de backend são o mesmo trabalho.",
          body: "Uma ótima interface falha se o modelo de dados, o contrato de API ou a operação por trás dela forem frágeis. Eu construo os dois lados juntos.",
        },
        {
          title: "Ownership significa levar decisões até produção.",
          body: "Eu me importo com o caminho completo: arquitetura, implementação, rollout, debugging, comunicação e os tradeoffs de produto no meio disso.",
        },
      ],
    },
    orbit: {
      label: "Projeto em destaque",
      title: "Orbit",
      subtitle:
        "Habit tracking com IA construído com visão de produto, ownership de founder e disciplina de sistemas.",
      roleLabel: "Papel",
      roleValue: "Founder e solo developer",
      intro:
        "O Orbit é onde eu junto AI UX, pensamento de produto multiplataforma, arquitetura e velocidade de execução. Não é um demo. É um produto moldado ponta a ponta por um único engenheiro com padrões claros de produto.",
      stats: [
        {
          label: "AI UX",
          value: "Fluxos de chat para hábito que parecem úteis, não teatrais.",
        },
        {
          label: "Estratégia de produto",
          value: "Design de comportamento diário ancorado em retenção e clareza.",
        },
        {
          label: "Rigor técnico",
          value: "Entrega cross-platform com backend limpo e pensamento operacional.",
        },
        {
          label: "Execução",
          value: "Velocidade de founder sem sacrificar qualidade de produto.",
        },
      ],
      steps: [
        {
          label: "01",
          title: "Do prompt ao plano",
          body: "O Orbit transforma linguagem natural em estruturas de hábito, agendas e sub-hábitos que fazem sentido imediatamente.",
        },
        {
          label: "02",
          title: "Uma superfície real de execução",
          body: "O produto sustenta uso diário com streaks, foco, categorização e uma interface que permanece calma em uso repetido.",
        },
        {
          label: "03",
          title: "Construído como um sistema de produto real",
          body: "Eu tratei o Orbit como uma empresa de produto trataria: UX, arquitetura, branding, materiais de lançamento e polimento operacional.",
        },
      ],
      links: {
        website: "Visitar Orbit",
        app: "Abrir o app",
      },
    },
    contact: {
      label: "Contato",
      title: "Entre em contato.",
      body:
        "Se você precisa de um senior product engineer capaz de entregar produtos com IA, backend forte e senso de produto, fale comigo.",
      emailLabel: "Email direto",
      form: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        submit: "Enviar mensagem",
        submitting: "Enviando...",
        success: "Mensagem enviada. Retorno em breve.",
        error:
          "Não foi possível enviar o formulário agora. Por favor, me envie um email diretamente.",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "voce@empresa.com",
        messagePlaceholder: "Conte o que você está construindo.",
      },
    },
    footer: {
      status: "Disponível para vagas full-time e consultorias selecionadas.",
      rights: "Thomas Luizon",
      builtWith: "Astro, GSAP e um front-end totalmente reconstruído.",
    },
  },
};
