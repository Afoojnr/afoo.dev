import { ExperienceItem, SkillItem, WorkItem } from "@/types";
import { images } from "./images";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

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
    image: images.propatis,
    company: "Propatis HQ",
    focus: "100% 50%",
    letterbox: "#0b0d12",
    type: "mobile",
    tech: ["React Native", "Next.js", "TypeScript", "Figma"],
    mobileUrl: "https://propatishq.com",
    webUrl: "https://propatishq.com",
    githubUrl: ""
  },
  {
    id: 6,
    title: "Applyd Hub",
    shortDescription:
      "A career document and application manager that ends tailoring fatigue for job and scholarship seekers.",
    fullDescription:
      "Applyd Hub keeps your career story in one place and turns it into the right documents for every opportunity, so you never rewrite a CV from scratch.\n\n" +
      "Key Features:\n" +
      "• One profile as the single source of truth for your career data\n" +
      "• Multiple tailored resumes and supporting documents generated from it\n" +
      "• Job and scholarship tracking from saved to offer\n" +
      "• Compatibility scores that show your fit before you apply\n" +
      "• AI that improves documents step by step instead of starting over\n\n" +
      "Built with Expo and React Native, styled with NativeWind, on an Express and PostgreSQL backend.",
    image: images.applydhub,
    company: "Afoo Inc",
    focus: "50% 50%",
    letterbox: "#151515",
    type: "mobile",
    tech: ["React Native", "Expo", "NativeWind", "Express", "PostgreSQL"],
    webUrl: "https://www.applydhub.com",
    mobileUrl: "https://apps.apple.com/app/id6765480348",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.afooinc.applydhub",
    githubUrl: ""
  },
  {
    id: 7,
    title: "Lab Brain",
    shortDescription:
      "An open-source research workspace that links samples, characterization, analysis and conclusions for materials science.",
    fullDescription:
      "Built for my own lab work. Lab Brain replaces scattered folders, spreadsheets, slides and personal notes with one connected system, so every result can be traced back to the sample that produced it.\n\n" +
      "Key Features:\n" +
      "• A linked data model: sample, characterization, analysis, conclusion\n" +
      "• Projects and experiments with searchable sample tables and imports\n" +
      "• Simple characterization calculations and plots (EDX, ellipsometry, FTIR)\n" +
      "• Export of the whole chain for a future reader\n" +
      "• An AI assistant that answers from your own records, with your own API key\n\n" +
      "Open source on GitHub, with a live demo.",
    image: images.labBrain,
    company: "Open source",
    focus: "50% 50%",
    letterbox: "#111111",
    type: "web",
    tech: ["Next.js", "Tailwind", "AI assistant", "Open source"],
    webUrl: "https://lab-brain-demo.onrender.com",
    githubUrl: "https://github.com/Afoojnr/lab-brain"
  },
  {
    id: 8,
    title: "Perry Luscious",
    shortDescription:
      "A website for a Lyon-based bakery to showcase its cakes and take customer orders.",
    fullDescription:
      "A website for Perry Luscious, an artisan pâtisserie in Lyon, made to show off the creations and turn visitors into orders.\n\n" +
      "Key Features:\n" +
      "• A showcase of custom cakes, platters and gift boxes\n" +
      "• Ordering with a cart, so customers can order straight from the site\n" +
      "• French and English versions\n" +
      "• Content the baker can update herself through a headless CMS\n\n" +
      "Built with Next.js and Tailwind, with Sanity as the headless CMS.",
    image: images.perryluscious,
    company: "Freelance",
    focus: "50% 50%",
    letterbox: "#fef9f2",
    type: "web",
    tech: ["Next.js", "Tailwind", "Sanity"],
    webUrl: "https://perryluscious.com",
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
    image: images.rungis,
    company: "Neo64 GmbH",
    focus: "0% 0%",
    type: "mobile",
    tech: ["Flutter", "Riverpod", "Dart"],
    mobileUrl: "https://apps.apple.com/de/app/r-express-shop/id6476933208",
    // webUrl: "https://www.rungisexpress.com/",
    githubUrl: ""
  },

  {
    id: 4,
    title: "Fideco App",
    shortDescription:
      "A B2B e-commerce mobile app for the Swiss market, built on a scalable shared architecture.",
    fullDescription:
      "Created for Fideco AG, a Swiss partner of Rungis Express. This project utilized a parallel development approach.\n\nKey Contributions:\n• Adapted the core e-commerce logic for the Swiss market\n• Customized UI components to match Fideco's specific branding\n• Managed separate routing and data storage requirements while maintaining a shared codebase.",
    image: images.fideco,
    company: "Neo64 GmbH",
    focus: "0% 0%",
    type: "mobile",
    tech: ["Flutter", "Riverpod", "Dart"],
    mobileUrl: "https://apps.apple.com/ch/app/fideco-shop/id6738232286",
    // webUrl: "https://fideco.ch/",
    githubUrl: ""
  },
  {
    id: 3,
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
    image: images.digisign,
    company: "DigiSign Technologies Limited",
    focus: "50% 50%",
    // Bars sampled from the screenshot's top and bottom rows, so they blend in
    letterbox:
      "linear-gradient(to right, #121821 0%, #11171f 20%, #11171f 40%, #11171f 50%, #11171f 60%, #11171f 80%, #151e2a 100%) top / 100% 50% no-repeat, linear-gradient(to right, #203148 0%, #1b293b 20%, #192535 40%, #192535 50%, #1a2636 60%, #1d2b3f 80%, #22354e 100%) bottom / 100% 50% no-repeat",
    type: "web",
    tech: ["Next.js", "TypeScript", "Ant Design", "Redux", "Jest"],
    webUrl: "https://www.digisignit.com/",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Klierfeld GmbH",
    shortDescription:
      "A modern corporate profile website for a German photovoltaic installation service provider.",
    fullDescription:
      "A highly responsive corporate site for Klierfeld GmbH, a German company, designed to showcase its green energy services.\n\nKey Contributions:\n• Seamless content management integration using Storyblok CMS\n• Styled using SCSS for a bespoke, modern look\n• Optimized for speed and SEO performance.",
    image: images.klierfeld,
    company: "Neo64 GmbH",
    focus: "50% 0%",
    // Whole page on desktop, with light bars above and below
    letterbox: "#f6f6f6",
    letterboxLgOnly: true,
    type: "web",
    tech: ["SvelteKit", "SCSS", "TypeScript", "Storyblok"],
    webUrl: "http://www.klierfeld-gmbh.com/",
    githubUrl: ""
  }
];

export const skills: SkillItem[] = [
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

/** How to reach Afolabi directly: the Contact section's main action. */
export const contact = {
  email: "afolabiabdulhamid4@gmail.com"
};

export const socialLinks = [
  {
    icon: AiFillGithub,
    href: "https://github.com/Afoojnr",
    label: "GitHub"
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/abdulhamid-afolabi-065b38160",
    label: "LinkedIn"
  },
  {
    icon: BsTwitter,
    href: "http://twitter.com/Afoojnr",
    label: "Twitter"
  }
];
