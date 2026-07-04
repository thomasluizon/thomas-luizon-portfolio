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
    stats: Array<{
      value: string;
      label: string;
    }>;
    pillars: Array<{
      label: string;
      title: string;
      body: string;
    }>;
    stackLabel: string;
    screensAlt: string[];
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
      languageLabel: "Language",
    },
    ui: {
      skipToContent: "Skip to content",
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
      subtitle: "An AI habit coach that acts, an open protocol any assistant can drive, and a support-first social layer.",
      roleValue: "Founder & solo developer",
      intro:
        "Orbit is a habit tracker shipped across web and Android as one product system: app, backend, applied AI, brand, and launch. The screens here are the real app; the section quotes its actual design language.",
      stats: [
        { value: "61", label: "Astra tools" },
        { value: "79", label: "MCP tools" },
        { value: "2", label: "platforms" },
        { value: "1", label: "developer" },
      ],
      pillars: [
        {
          label: "01 · AI coach",
          title: "Astra acts, not just chats",
          body: "Say \"I ran today\" and Astra logs it; ask \"how am I doing?\" and it reads your real streaks. 61 built-in tools across habits, goals, calendar, and memory, plus voice and photo input.",
        },
        {
          label: "02 · Open protocol",
          title: "Drive Orbit from any AI",
          body: "Orbit ships a full Model Context Protocol server (79 tools, OAuth and scoped keys), so Claude, ChatGPT, or any MCP client can manage your habits from wherever you already chat.",
        },
        {
          label: "03 · Social",
          title: "Accountability, not leaderboards",
          body: "Opt in for accountability buddies, co-op challenges, cheers, and invite links. Deliberately no leaderboards (encouragement over competition), and off by default until you choose to share.",
        },
        {
          label: "04 · Core tracker",
          title: "A serious tracker underneath",
          body: "Flexible scheduling, sub-habits, checklists, goals with velocity metrics, a color-coded calendar with Google import, XP and streaks with freeze protection, and an Android home-screen widget.",
        },
      ],
      stackLabel: "Built with",
      screensAlt: [
        "Astra AI coach chat offering to summarize the day or adjust a habit",
        "Today screen with the habit list, streak, and daily progress",
        "Color-coded monthly habit calendar with completion status",
        "Social screen with friends, co-op challenges, and cheers",
      ],
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
        "If you need a software engineer for AI-heavy products with strong systems and product taste, let's talk.",
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
      title: "Thomas Luizon | Engenheiro de Software",
      description:
        "Engenheiro de software focado em transformar backend, cloud, frontend e IA em produtos digitais bem acabados, com arquitetura sólida e visão de produto.",
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
      eyebrow: "Engenheiro de Software",
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
        "Sou engenheiro de software e gosto de trabalhar no produto inteiro, não só em uma parte isolada. Normalmente estou entre backend, cloud, frontend e IA, conectando as peças para que a experiência final faça sentido.",
        "Para mim, produto bom parece simples porque muita coisa foi bem resolvida por trás. APIs claras, fluxo de dados bem pensado e interface cuidadosa precisam se complementar.",
        "O Orbit resume bem esse jeito de trabalhar: app, backend, IA, marca, site e lançamento construídos como partes do mesmo produto.",
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
      subtitle: "Um coach de hábitos com IA que age, um protocolo aberto que qualquer assistente controla e uma camada social feita para apoiar.",
      roleValue: "Fundador e desenvolvedor solo",
      intro:
        "O Orbit é um app de hábitos entregue na web e no Android como um produto só: app, backend, IA aplicada, marca e lançamento. As telas aqui são as reais do app, e a seção usa a mesma linguagem visual do produto.",
      stats: [
        { value: "61", label: "ferramentas do Astra" },
        { value: "79", label: "ferramentas MCP" },
        { value: "2", label: "plataformas" },
        { value: "1", label: "desenvolvedor" },
      ],
      pillars: [
        {
          label: "01 · Coach com IA",
          title: "O Astra age, não só conversa",
          body: "Diga \"corri hoje\" e o Astra registra; pergunte \"como estou indo?\" e ele lê suas sequências reais. 61 ferramentas nativas entre hábitos, metas, calendário e memória, além de voz e imagem.",
        },
        {
          label: "02 · Protocolo aberto",
          title: "Controle o Orbit por qualquer IA",
          body: "O Orbit expõe um servidor Model Context Protocol completo (79 ferramentas, OAuth e chaves com escopo) para Claude, ChatGPT ou qualquer cliente MCP cuidar dos seus hábitos de onde você já conversa.",
        },
        {
          label: "03 · Social",
          title: "Apoio, não ranking",
          body: "Ative parceiros de responsabilidade, desafios em grupo, incentivos e links de convite. De propósito sem ranking (incentivo em vez de competição), e desligado até você decidir compartilhar.",
        },
        {
          label: "04 · Tracker de verdade",
          title: "Um tracker sério por baixo",
          body: "Agendamento flexível, sub-hábitos, checklists, metas com métricas de ritmo, calendário colorido com import do Google, XP e sequências com proteção de congelamento, e um widget na tela inicial do Android.",
        },
      ],
      stackLabel: "Feito com",
      screensAlt: [
        "Chat da IA Astra oferecendo resumir o dia ou ajustar um hábito",
        "Tela de hoje com a lista de hábitos, sequência e progresso do dia",
        "Calendário mensal de hábitos colorido com status de conclusão",
        "Tela social com amigos, desafios em grupo e incentivos",
      ],
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
