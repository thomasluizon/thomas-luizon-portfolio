import profileImage from "../assets/images/profile.png";
import aiChatImage from "../assets/orbit/ai-chat.png";
import calendarImage from "../assets/orbit/calendar.png";
import featureGraphicImage from "../assets/orbit/feature-graphic.png";
import habitsImage from "../assets/orbit/habits.png";
import logoNoBgImage from "../assets/orbit/logo-no-bg.png";
import widgetImage from "../assets/orbit/widget.png";

export const siteConfig = {
  siteUrl: "https://thomas-luizon-portfolio.vercel.app",
  name: "Thomas Luizon",
  role: "Software Engineer",
  location: "Sao Paulo, Brazil",
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
    "Software engineering with applied AI",
    "AWS, Azure, and event-driven architecture",
    "Founder and solo developer of Orbit",
  ],
} as const;

export const siteAssets = {
  profile: profileImage,
} as const;

export const orbitCaseStudy = {
  name: "Orbit",
  url: "https://useorbit.org/",
  appUrl: "https://app.useorbit.org/",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=org.useorbit.app",
  role: "Founder & solo developer",
  assets: {
    logo: logoNoBgImage,
    featureGraphic: featureGraphicImage,
    screens: [
      {
        id: "chat",
        image: aiChatImage,
      },
      {
        id: "habits",
        image: habitsImage,
      },
      {
        id: "calendar",
        image: calendarImage,
      },
      {
        id: "widget",
        image: widgetImage,
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
