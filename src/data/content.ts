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
      title: "Thomas Luizon | Senior Product Engineer",
      description:
        "Senior product engineer building AI products with strong backend, cloud infrastructure, and product thinking. Explore Thomas Luizon's work and Orbit.",
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
      title: "AI products, backend depth, product taste.",
      summary:
        "I build production software across .NET, TypeScript, AWS, and Azure, from infrastructure and APIs to the experience people actually use.",
      primaryCta: "Let's work together",
      secondaryCta: "View my main project",
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
      title: "I connect the system work to the product work.",
      narrative: [
        "Most of my work starts in the backend: C#, .NET, APIs, relational databases, queues, and systems that need to stay stable in production.",
        "I have spent a lot of time with AWS, Azure, SQL Server, Kafka, and event-driven flows in products that had to move fast without becoming fragile.",
        "I also care about what the user touches. I work comfortably in TypeScript, React, Vue, Next, and Nuxt when the product needs a sharper frontend.",
        "The work I like most is making those layers fit, so the interface feels simple because the system underneath is doing its job.",
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
      subtitle: "An AI habit app built as a real product, not a demo.",
      roleLabel: "Role",
      roleValue: "Founder & solo developer",
      intro:
        "Orbit is where I brought product, AI, backend, mobile, and brand into one thing. I designed, built, and shipped it myself.",
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
        "If you need a senior product engineer for AI-heavy products with strong systems and product taste, let's talk.",
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
      title: "Thomas Luizon | Senior Product Engineer",
      description:
        "Senior product engineer construindo produtos com IA, backend forte, cloud e visão de produto. Conheça o trabalho de Thomas Luizon e o Orbit.",
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
      title: "Produtos com IA, backend forte e visão de produto.",
      summary:
        "Construo software em produção com .NET, TypeScript, AWS e Azure, indo de infraestrutura e APIs até a experiência que as pessoas usam.",
      primaryCta: "Vamos trabalhar juntos",
      secondaryCta: "Ver meu projeto principal",
      proofLabel: "Provas selecionadas",
      proofItems: [
        "Mais de 6 anos entregando sistemas em produção",
        "Profundidade em IA, cloud e infraestrutura",
        "TypeScript e .NET em toda a stack",
        "Founder e solo developer do Orbit",
      ],
    },
    about: {
      label: "Sobre",
      title: "Conecto o trabalho de sistema ao trabalho de produto.",
      narrative: [
        "Grande parte do meu trabalho começa no backend: C#, .NET, APIs, banco relacional, filas e sistemas que precisam continuar estáveis em produção.",
        "Passei bastante tempo com AWS, Azure, SQL Server, Kafka e fluxos orientados a eventos em produtos que precisavam evoluir rápido sem virar bagunça.",
        "Também cuido do que o usuário toca. Trabalho bem com TypeScript, React, Vue, Next e Nuxt quando o produto pede uma interface mais bem resolvida.",
        "O trabalho que mais gosto é fazer essas camadas encaixarem, para a experiência parecer simples porque o sistema por baixo está fazendo o certo.",
      ],
      capabilityLabel: "Tecnologias com que mais trabalho",
      capabilities: [
        "C#, .NET Core, ASP.NET Core, Python",
        "TypeScript, React, Vue.js, Next.js, Nuxt.js",
        "AWS, Azure, AppConfig, Lambda, APIs",
        "SQL Server, Redis, Kafka, BFF e CI/CD",
      ],
    },
    principles: {
      label: "Princípios",
      title: "Como eu tomo decisões.",
      intro: "",
      items: [
        {
          title: "IA precisa merecer espaço no produto.",
          body: "Se ela entra, tem que deixar uma tarefa mais clara, mais rápida ou mais fácil.",
        },
        {
          title: "Arquitetura boa é a que ajuda o time.",
          body: "Eu prefiro sistemas fáceis de entender, fáceis de mudar e sem complexidade inventada.",
        },
        {
          title: "Frontend e backend precisam ser pensados juntos.",
          body: "O produto fica melhor quando interface, modelo de dados e APIs puxam para o mesmo lado.",
        },
        {
          title: "Ownership, para mim, é ficar com o problema até o fim.",
          body: "Gosto de acompanhar o trabalho da decisão de produto ao rollout e aos trade-offs do caminho.",
        },
      ],
    },
    orbit: {
      label: "Projeto em destaque",
      title: "Orbit",
      subtitle: "Um app de hábitos com IA pensado como produto real, não como demo.",
      roleLabel: "Papel",
      roleValue: "Fundador e único desenvolvedor",
      intro:
        "No Orbit, eu juntei produto, IA, backend, mobile e marca em um mesmo trabalho. Eu desenhei, construí e lancei tudo sozinho.",
      stats: [
        {
          label: "AI UX",
          value: "Fluxos de chat para hábitos que ajudam de verdade, sem teatralidade.",
        },
        {
          label: "Estratégia de produto",
          value: "Comportamento diário pensado para clareza, consistência e retenção.",
        },
        {
          label: "Rigor técnico",
          value: "Entrega cross-platform apoiada por APIs limpas e visão operacional.",
        },
        {
          label: "Execução",
          value: "Velocidade de founder sem deixar a qualidade cair.",
        },
      ],
      steps: [
        {
          label: "01",
          title: "Do texto para uma rotina de verdade",
          body: "Você descreve o que quer fazer. O Orbit transforma isso em hábitos, horários e ações menores.",
        },
        {
          label: "02",
          title: "Feito para uso recorrente",
          body: "Check-ins, ajustes de plano e continuidade sem uma interface cansativa.",
        },
        {
          label: "03",
          title: "Tratado como produto desde o começo",
          body: "App, backend, site, marca e lançamento foram pensados como um produto só.",
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
        "Se você precisa de um senior product engineer para produtos com IA, backend forte e senso de produto, fale comigo.",
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
