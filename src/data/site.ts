export const siteConfig = {
  siteUrl: "https://thomas-luizon-portfolio.vercel.app",
  name: "Thomas Luizon",
  role: "Senior Product Engineer",
  location: "São Paulo, Brazil",
  email: "thomaslrgregorio@gmail.com",
  linkedin: "https://www.linkedin.com/in/thomas-luizon",
  github: "https://github.com/thomasluizon",
  contactSubject: "Portfolio contact - Thomas Luizon",
  formAction: "https://formsubmit.co/ajax/thomaslrgregorio@gmail.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/thomasluizon",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thomas-luizon",
    },
    {
      label: "Email",
      href: "mailto:thomaslrgregorio@gmail.com",
    },
  ],
  heroProof: [
    "6+ years shipping production systems",
    "AI-first product engineering",
    "AWS, Azure, and event-driven architecture",
    "Founder and solo developer of Orbit",
  ],
} as const;

export const orbitCaseStudy = {
  name: "Orbit",
  url: "https://useorbit.org/",
  appUrl: "https://app.useorbit.org/",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=org.useorbit.app",
  role: "Founder & solo developer",
  assets: {
    logo: "/orbit/logo-no-bg.png",
    featureGraphic: "/orbit/feature-graphic.png",
    portfolio: "/orbit/portfolio.png",
    screens: [
      {
        id: "chat",
        image: "/orbit/ai-chat.png",
      },
      {
        id: "habits",
        image: "/orbit/habits.png",
      },
      {
        id: "calendar",
        image: "/orbit/calendar.png",
      },
      {
        id: "widget",
        image: "/orbit/widget.png",
      },
    ],
  },
  stack: [
    ".NET",
    "TypeScript",
    "AWS",
    "React Native",
  ],
} as const;
