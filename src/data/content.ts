export const locales = ["en", "pt"] as const;
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
  };
  ui: {
    skipToContent: string;
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
    roleValue: string;
    intro: string;
    pillars: Array<{
      label: string;
      title: string;
      body: string;
    }>;
    stackLabel: string;
    previewAlt: string;
    previewCaption: string;
    links: {
      play: string;
      app: string;
      website: string;
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
      title: "Thomas Luizon | Senior Full-Stack Engineer",
      description:
        "Senior full-stack engineer building production systems, digital products, and Orbit with backend, cloud, frontend, and AI applied with product thinking.",
    },
    nav: {
      about: "About",
      principles: "Principles",
      orbit: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      languageLabel: "Language",
    },
    ui: {
      skipToContent: "Skip to content",
    },
    hero: {
      eyebrow: "Senior Full-Stack Engineer",
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
        "I am a senior full-stack engineer who likes the full path from architecture to interface. My work usually connects backend reliability, cloud infrastructure, frontend execution, and practical AI features.",
        "I care about products that feel simple because the system underneath is well designed. Good APIs, clear data flows, and thoughtful UI decisions should work together instead of competing for attention.",
        "Orbit is the clearest example of that approach: a real product that I build across app, backend, AI flows, and brand.",
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
      subtitle: "An AI that tracks habits.",
      roleValue: "Founder & solo developer",
      intro:
        "I built Orbit for adults who know what they want to do but struggle to keep a routine. Astra puts AI on the main path, helping people track and adjust habits with less admin.",
      pillars: [
        {
          label: "Astra",
          title: "A request becomes an action",
          body: "Describe the habit you want to build. Astra proposes the change so you can review it before saving. AI is part of the routine, from the first request.",
        },
        {
          label: "Routines",
          title: "Make room for starting again",
          body: "Habits, goals, reminders, and a calendar share one routine. The design helps people return after a missed day without turning the system into more work.",
        },
        {
          label: "Engineering",
          title: "One product, web and Android",
          body: "Next.js and Expo / React Native share a .NET API and PostgreSQL data model. I build and maintain the path from the interface to the data.",
        },
        {
          label: "Ownership",
          title: "From decision to release",
          body: "I own product decisions, interface design, AI flows, infrastructure, and delivery. Orbit brings my engineering work and product thinking into the same place.",
        },
      ],
      stackLabel: "Built with",
      previewAlt: "Orbit website demo showing Astra proposing a morning walk for approval",
      previewCaption: "Product demo from useorbit.org",
      links: {
        play: "Get it on Google Play",
        app: "Open the web app",
        website: "useorbit.org",
      },
    },
    contact: {
      label: "Contact",
      title: "Get in touch.",
      body:
        "If you need a senior full-stack engineer for AI-heavy products with strong systems and product taste, let's talk.",
      emailLabel: "Direct email",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
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
  pt: {
    meta: {
      title: "Thomas Luizon | Engenheiro de Software Full-Stack Sênior",
      description:
        "Engenheiro de software full-stack sênior focado em transformar backend, cloud, frontend e IA em produtos digitais bem acabados, com arquitetura sólida e visão de produto.",
    },
    nav: {
      about: "Sobre",
      principles: "Princípios",
      orbit: "Projetos",
      contact: "Contato",
      menu: "Menu",
      close: "Fechar",
      languageLabel: "Idioma",
    },
    ui: {
      skipToContent: "Pular para o conteúdo",
    },
    hero: {
      eyebrow: "Engenheiro de Software Full-Stack Sênior",
      title: "Thomas Luizon",
      summary:
        "Crio produtos digitais de ponta a ponta, conectando backend, cloud, frontend e IA para tirar complexidade do caminho e entregar experiências claras, estáveis e fáceis de usar.",
      primaryCta: "Contato",
      secondaryCta: "Projetos",
      proofLabel: "Alguns destaques",
      proofItems: [
        "6+ anos colocando sistemas em produção",
        "Boa bagagem em IA, cloud e infraestrutura",
        "TypeScript e .NET trabalhando juntos na stack",
        "Fundador e desenvolvedor solo do Orbit",
      ],
    },
    about: {
      label: "Sobre",
      question: "Quem sou eu?",
      title: "Sobre mim",
      narrative: [
        "Sou engenheiro de software full-stack sênior e gosto de trabalhar no produto inteiro, não só em uma parte isolada. Normalmente estou entre backend, cloud, frontend e IA, conectando as peças para que a experiência final faça sentido.",
        "Para mim, produto bom parece simples porque muita coisa foi bem resolvida por trás. APIs claras, fluxo de dados bem pensado e interface cuidadosa precisam se complementar.",
        "O Orbit resume bem esse jeito de trabalhar: app, backend, IA, marca e site construídos como partes do mesmo produto.",
      ],
      capabilityLabel: "Tecnologias que mais uso no dia a dia",
      capabilities: [
        "C#, .NET Core, ASP.NET Core, Python",
        "TypeScript, React, Vue.js, Next.js, Nuxt.js",
        "AWS, Azure, AppConfig, Lambda, design de APIs",
        "SQL Server, Redis, Kafka, BFF, CI/CD",
      ],
    },
    principles: {
      label: "Princípios",
      title: "Como eu decido.",
      intro: "",
      items: [
        {
          title: "IA precisa fazer diferença.",
          body: "IA só entra quando deixa uma tarefa mais clara, mais rápida ou mais fácil.",
        },
        {
          title: "Boa arquitetura destrava o trabalho.",
          body: "Gosto de sistemas que o time entende rápido, muda com segurança e não criam complexidade onde ela não precisa existir.",
        },
        {
          title: "Frontend e backend nascem juntos.",
          body: "A experiência melhora quando interface, dados e API são pensados como partes do mesmo fluxo.",
        },
        {
          title: "Ownership é continuar até resolver.",
          body: "Gosto de acompanhar o trabalho da decisão de produto ao rollout, incluindo os tradeoffs do caminho.",
        },
      ],
    },
    orbit: {
      label: "Projeto em destaque",
      title: "Orbit",
      subtitle: "Uma IA que acompanha seus hábitos.",
      roleValue: "Fundador e desenvolvedor solo",
      intro:
        "Criei o Orbit para adultos que sabem o que querem fazer, mas têm dificuldade para manter uma rotina. A Astra coloca a IA no caminho principal e ajuda a registrar e ajustar hábitos com menos trabalho.",
      pillars: [
        {
          label: "Astra",
          title: "Um pedido vira uma ação",
          body: "Descreva o hábito que quer criar. A Astra propõe a mudança para você revisar antes de salvar. A IA participa da rotina desde o primeiro pedido.",
        },
        {
          label: "Rotinas",
          title: "Espaço para recomeçar",
          body: "Hábitos, metas, lembretes e calendário fazem parte da mesma rotina. O design ajuda a voltar depois de um dia perdido sem transformar o sistema em mais trabalho.",
        },
        {
          label: "Engenharia",
          title: "Um produto, web e Android",
          body: "Next.js e Expo / React Native compartilham uma API .NET e um modelo de dados PostgreSQL. Construo e mantenho o caminho da interface até os dados.",
        },
        {
          label: "Responsabilidade",
          title: "Da decisão ao lançamento",
          body: "Cuido das decisões de produto, interface, fluxos de IA, infraestrutura e entrega. O Orbit reúne meu trabalho de engenharia e minha visão de produto.",
        },
      ],
      stackLabel: "Feito com",
      previewAlt: "Demonstração do site do Orbit com a Astra propondo uma caminhada para aprovação",
      previewCaption: "Demonstração do produto em useorbit.org",
      links: {
        play: "Baixe no Google Play",
        app: "Abrir o app web",
        website: "useorbit.org",
      },
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar.",
      body:
        "Se você está construindo um produto com IA, sistemas complexos ou uma experiência que precisa ser bem resolvida do backend à interface, me chama.",
      emailLabel: "E-mail direto",
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        submit: "Enviar",
        submitting: "Enviando...",
        success: "Mensagem enviada. Te respondo em breve.",
        error: "Não consegui enviar o formulário agora. Se puder, me mande um e-mail direto.",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "nome@empresa.com",
        messagePlaceholder: "Me conta o que você está construindo.",
      },
    },
  },
};
