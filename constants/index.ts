import { ExperienceItem, SkillItem, WorkItem } from "@/types";
import { images } from "./images";

export const navItems = ["home", "about", "experience", "works", "contact"];

export const experiences: ExperienceItem[] = [
  {
    title: "Founding Engineer & Product Lead",
    company_name: "Propatis HQ",
    icon: images.propatisLogo,
    date: "May 2024 - Present",
    points: [
      "Co-founded the startup and architected the frontend infrastructure for both mobile (React Native) and the B2C web platform.",
      "Acting as Product Manager: Defining the roadmap, strategy, and feature requirements to deliver our solutions.",
      "Leading the product design team, overseeing UI/UX decisions from concept to execution.",
      "Spearheading marketing initiatives and driving brand awareness."
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "Neo64 GmbH",
    icon: images.neo64,
    date: "Jul 2023 – Aug 2024",
    points: [
      "Contributed to the development of Rungis Express and Fideco e-commerce mobile apps using Flutter",
      "Built dynamic corporate websites like 'Klierfeld GmbH' using Svelte, SCSS, and Storyblok CMS.",
      "Contributed to the 'Wedflix' streaming platform dashboard using Svelte, TypeScript, and Tailwind."
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "DigiSign Technologies Limited",
    icon: images.digisignLogo,
    date: "Dec 2022 – May 2023",
    points: [
      "Contributed to the development of DigiSign, a secure document management system featuring biometric signing capabilities.",
      "Developed reusable UI components and dashboard functionality using Next.js, TypeScript, and Ant Design.",
      "Wrote comprehensive E2E and unit tests using Jest to ensure system reliability."
    ]
  }
];

export const works: WorkItem[] = [
  {
    id: 1,
    title: "Propatis HQ",
    shortDescription:
      "A comprehensive real estate platform that simplifies property management and tenant interactions for businesses and individuals.",
    fullDescription:
      "Propatis HQ is a complete solution for real estate management:\n\n" +
      "B2B: Manage properties, tenants, and requests efficiently for real estate businesses.\n" +
      "Private B2C: Allow B2B clients to list their properties on their own websites.\n" +
      "Public B2C: A marketplace for public property listings.\n\n" +
      "Key Features:\n" +
      "• Website creation for B2B clients\n" +
      "• Property and tenant management\n" +
      "• Request workflow handling\n" +
      "• Real estate listings with search and filter\n" +
      "• Cross-platform availability (Web & Mobile)",
    image: images.propatis.src,
    type: "mobile",
    tech: ["React Native", "Next.js", "TypeScript", "Figma"],
    mobileUrl: "https://propatis.com",
    webUrl: "https://propatis.com",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Rungis Express App",
    shortDescription:
      "A B2B e-commerce mobile app for a major food trading company operating in Germany and Austria.",
    fullDescription:
      "Contributed to the development of the mobile commerce experience for Rungis Express GmbH.\n\n" +
      "Key Contributions:\n" +
      "• Engineered login, cart and checkout logic\n" +
      "• Built UI components and screens, connecting them to the backend\n" +
      "• Implemented shared preferences for persistent user data\n" +
      "• Ensured smooth, responsive user interactions across the app",
    image: images.rungis.src,
    type: "mobile",
    tech: ["Flutter", "Riverpod", "Dart"],
    mobileUrl: "https://apps.apple.com/de/app/r-express-shop/id6476933208",
    // webUrl: "https://www.rungisexpress.com/",
    githubUrl: ""
  },
  {
    id: 3,
    title: "Fideco App",
    shortDescription:
      "A B2B e-commerce mobile app for the Swiss market, built on a scalable shared architecture.",
    fullDescription:
      "Created for Fideco AG, a Swiss partner of Rungis Express. This project utilized a parallel development approach.\n\nKey Contributions:\n• Adapted the core e-commerce logic for the Swiss market\n• Customized UI components to match Fideco's specific branding\n• Managed separate routing and data storage requirements while maintaining a shared codebase.",
    image: images.fideco.src,
    type: "mobile",
    tech: ["Flutter", "Riverpod", "Dart"],
    mobileUrl: "https://apps.apple.com/ch/app/fideco-shop/id6738232286",
    // webUrl: "https://fideco.ch/",
    githubUrl: ""
  },
  {
    id: 4,
    title: "DigiSign System",
    shortDescription:
      "A secure document management dashboard featuring biometric signing capabilities for identity verification.",
    fullDescription:
      "Contributed to a high-security dashboard ensuring authenticity of digital signers.\n\n" +
      "Key Contributions:\n" +
      "• Developed reusable UI components for a seamless user experience\n" +
      "• Wrote comprehensive unit and end-to-end (E2E) tests\n" +
      "• Collaborated on secure onboarding and authentication flows\n" +
      "• Supported dashboard features for document tracking",
    image: images.digisign.src,
    type: "web",
    tech: ["Next.js", "TypeScript", "Ant Design", "Redux", "Jest"],
    webUrl: "https://www.digisignit.com/",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Klierfeld GmbH",
    shortDescription:
      "A modern corporate profile website for a photovoltaic installation service provider.",
    fullDescription:
      "A highly responsive corporate site designed to showcase Klierfeld's green energy services.\n\nKey Contributions:\n• Seamless content management integration using Storyblok CMS\n• Styled using SCSS for a bespoke, modern look\n• Optimized for speed and SEO performance.",
    image: images.klierfeld.src,
    type: "web",
    tech: ["SvelteKit", "SCSS", "TypeScript", "Storyblok"],
    webUrl: "http://www.klierfeld-gmbh.com/",
    githubUrl: ""
  }
];



export const skills:SkillItem[] = [
  { name: "React", icon: images.react },
  { name: "Next.js", icon: images.next },
  { name: "TypeScript", icon: images.typescript },
  { name: "Tailwind", icon: images.tailwind },
  { name: "React Native", icon: images.react },
  { name: "Flutter", icon: images.flutter },
  { name: "Node", icon: images.node },
  { name: "Express", icon: images.express },
  { name: "Python", icon: images.python },
  { name: "Figma", icon: images.figma }
];
