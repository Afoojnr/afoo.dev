import { ExperienceItem, SkillGroup, WorkItem } from "@/types";
import { images } from "./images";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

export const navItems = [
  "home",
  "about",
  "experience",
  "works",
  "contact"
] as const;
export type NavItem = (typeof navItems)[number];

export const experiences: ExperienceItem[] = [
  {
    id: "propatis",
    icon: images.propatisLogo,
    url: "https://propatishq.com",
    start: "2024-05"
  },
  {
    id: "applyd-hub",
    icon: images.applydhubLogo,
    url: "https://www.applydhub.com",
    start: "2026-03"
  },
  {
    id: "neo64",
    icon: images.neo64,
    url: "https://www.neo64.de",
    start: "2023-07",
    end: "2024-08"
  },
  {
    id: "digisign",
    icon: images.digisignLogo,
    url: "https://www.digisignit.com",
    start: "2022-12",
    end: "2023-05"
  }
];

export const works: WorkItem[] = [
  {
    id: 6,
    title: "Applyd Hub",
    slug: "applyd-hub",
    featured: true,
    image: images.applydhub,
    focus: "50% 50%",
    letterbox: "#151515",
    type: "mobile",
    tech: [
      "React Native",
      "Expo",
      "NativeWind",
      "Framer Motion",
      "TanStack Query",
      "React Hook Form",
      "Express",
      "PostgreSQL",
      "Docker"
    ],
    webUrl: "https://www.applydhub.com",
    mobileUrl: "https://apps.apple.com/app/id6765480348",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.afooinc.applydhub",
    githubUrl: ""
  },
  {
    id: 1,
    title: "Propatis HQ",
    slug: "propatis",
    featured: true,
    image: images.propatis,
    focus: "100% 50%",
    letterbox: "#0b0d12",
    type: "mobile",
    tech: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "TanStack Query",
      "React Hook Form",
      "Jest",
      "Playwright",
      "Docker",
      "Figma"
    ],
    mobileUrl: "https://propatishq.com",
    webUrl: "https://propatishq.com",
    githubUrl: ""
  },
  {
    id: 8,
    title: "Perry Luscious",
    slug: "perry-luscious",
    featured: true,
    image: images.perryluscious,
    focus: "50% 0%",
    // maroon banner on top, cream page below
    letterbox: "linear-gradient(#622a30 50%, #f3e3d0 50%)",
    letterboxLgOnly: true,
    type: "web",
    tech: ["Next.js", "Tailwind", "Three.js", "Sanity"],
    webUrl: "https://perryluscious.com",
    githubUrl: ""
  },
  {
    id: 7,
    title: "Lab Brain",
    slug: "lab-brain",
    featured: true,
    image: images.labBrain,
    focus: "50% 50%",
    letterbox: "#111111",
    type: "web",
    tech: [
      "Next.js",
      "Tailwind",
      "TanStack Query",
      "React Hook Form",
      "Vitest",
      "Playwright",
      "Docker"
    ],
    webUrl: "https://lab-brain-demo.onrender.com",
    githubUrl: "https://github.com/Afoojnr/lab-brain",
    contributionUrl: "https://optimeo.streamlit.app/"
  },
  {
    id: 2,
    title: "Rungis Express App",
    slug: "rungis",
    image: images.rungis,
    focus: "0% 0%",
    type: "mobile",
    tech: ["Flutter", "Riverpod", "Dart"],
    mobileUrl: "https://apps.apple.com/de/app/r-express-shop/id6476933208",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rungisexpress.app",
    // webUrl: "https://www.rungisexpress.com/",
    githubUrl: ""
  },

  {
    id: 4,
    title: "Fideco App",
    slug: "fideco",
    image: images.fideco,
    focus: "0% 0%",
    type: "mobile",
    tech: ["Flutter", "Riverpod", "Dart"],
    mobileUrl: "https://apps.apple.com/ch/app/fideco-shop/id6738232286",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=ch.fideco.shop.app",
    // webUrl: "https://fideco.ch/",
    githubUrl: ""
  },
  {
    id: 3,
    title: "DigiSign System",
    slug: "digisign",
    image: images.digisign,
    focus: "50% 50%",
    // colours sampled from the screenshot edges
    letterbox:
      "linear-gradient(to right, #121821 0%, #11171f 20%, #11171f 40%, #11171f 50%, #11171f 60%, #11171f 80%, #151e2a 100%) top / 100% 50% no-repeat, linear-gradient(to right, #203148 0%, #1b293b 20%, #192535 40%, #192535 50%, #1a2636 60%, #1d2b3f 80%, #22354e 100%) bottom / 100% 50% no-repeat",
    type: "web",
    tech: [
      "Next.js",
      "TypeScript",
      "Ant Design",
      "Redux",
      "Jest",
      "Playwright"
    ],
    webUrl: "https://www.digisignit.com/",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Klierfeld GmbH",
    slug: "klierfeld",
    image: images.klierfeld,
    focus: "50% 0%",
    letterbox: "#f6f6f6",
    letterboxLgOnly: true,
    type: "web",
    tech: ["SvelteKit", "SCSS", "TypeScript", "Storyblok"],
    webUrl: "http://www.klierfeld-gmbh.com/",
    githubUrl: ""
  }
];

export const featuredWorks = works.filter(work => work.featured);
export const moreWorks = works.filter(work => !work.featured);

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    skills: [
      { name: "React", icon: images.react },
      { name: "Next.js", icon: images.next },
      { name: "TypeScript", icon: images.typescript },
      { name: "Tailwind CSS", icon: images.tailwind }
    ]
  },
  {
    id: "mobile",
    skills: [
      { name: "React Native", icon: images.react },
      { name: "Expo", icon: images.expo },
      { name: "Flutter", icon: images.flutter }
    ]
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", icon: images.node },
      { name: "Express", icon: images.express },
      { name: "PostgreSQL", icon: images.postgresql },
      { name: "Python (ML)", icon: images.python }
    ]
  },
  {
    id: "testing",
    skills: [
      { name: "Jest", icon: images.jest },
      { name: "Vitest", icon: images.vitest },
      { name: "Playwright", icon: images.playwright }
    ]
  },
  {
    id: "product",
    skills: [
      { name: "Figma", icon: images.figma },
      { name: "Jira", icon: images.jira }
    ]
  }
];

export const contact = {
  email: "hello@afoo.dev"
};

export const socialLinks = [
  {
    icon: AiFillGithub,
    href: "https://github.com/Afoojnr",
    label: "GitHub"
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/abdulhamidafolabi",
    label: "LinkedIn"
  },
  {
    icon: BsTwitter,
    href: "http://twitter.com/Afoojnr",
    label: "Twitter"
  }
];
