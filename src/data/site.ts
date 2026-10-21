import profileImage from "../assets/images/profile.png";
import orbitLogo from "../assets/orbit/orbit-lockup.svg";
import productPreview from "../assets/orbit/product-preview.png";

export const siteConfig = {
  siteUrl: "https://thomas-luizon-portfolio.vercel.app",
  name: "Thomas Luizon",
  role: "Senior Full-Stack Engineer",
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
    logo: orbitLogo,
    preview: productPreview,
  },
  stack: [
    ".NET",
    "Next.js",
    "Expo / React Native",
    "PostgreSQL",
  ],
} as const;
