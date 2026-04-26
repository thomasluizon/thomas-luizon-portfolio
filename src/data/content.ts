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
      subtitle: "Hábitos com IA, rotinas de verdade e execução de produto no mesmo lugar.",
      roleLabel: "Papel",
      roleValue: "Fundador e desenvolvedor solo",
      intro:
        "O Orbit junta UX mobile, IA aplicada, backend e uma identidade visual própria. Aqui eu mostro telas reais do app e a mesma linguagem visual usada na landing page do produto.",
      stats: [
        {
          label: "UX com IA",
          value: "Conversas que viram hábitos práticos, sem parecer demo de IA.",
        },
        {
          label: "Estratégia de produto",
          value: "Rotina diária pensada para clareza, consistência e retenção.",
        },
        {
          label: "Base técnica",
          value: "App multiplataforma apoiado por APIs limpas e uma arquitetura fácil de operar.",
        },
        {
          label: "Execução",
          value: "Velocidade de fundador, mas sem tratar qualidade como detalhe.",
        },
      ],
      steps: [
        {
          label: "01",
          title: "Da ideia para a rotina",
          body: "Você descreve o que quer criar, e o Orbit quebra isso em hábitos, horários e próximos passos.",
        },
        {
          label: "02",
          title: "Feito para voltar todo dia",
          body: "Check-ins, ajustes de plano e progresso visível sem transformar a tela em barulho.",
        },
        {
          label: "03",
          title: "Um produto, não peças soltas",
          body: "App, backend, site, marca e lançamento foram construídos como partes do mesmo sistema desde o início.",
        },
      ],
      links: {
        website: "Ver o Orbit",
        app: "Abrir o app",
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
        submit: "Enviar mensagem",
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
