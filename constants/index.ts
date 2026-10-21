import { ExperienceItem, SkillItem, WorkItem } from "@/types";
import { images } from "./images";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

export const navItems = ["home", "about", "experience", "works", "contact"];

export const availability = {
  start: "Available full-time from Oct 2027.",
  location: "Lyon, France · open to relocation"
};

export const experiences: ExperienceItem[] = [
  {
    title: "Founding Engineer & Product Lead",
    company_name: "Propatis HQ",
    icon: images.propatisLogo,
    date: "May 2024 - Present",
    points: [
      "Built the React Native mobile app on my own, now in App Store and Google Play review, and lead the web front end, in a team of 4.",
      "Took over product design when our designer stepped back. User feedback showed both the B2B and B2C flows were hard to use, so I redesigned the landing page and am redesigning B2B next, then B2C.",
      "Run the product: roadmap, Jira backlog, and pitching and onboarding clients one on one. ~200 daily visitors and 80+ sign-ups so far.",
      "Set up the growth stack: technical SEO, Google Analytics, paid campaigns on Google Ads, TikTok and LinkedIn, and content."
    ]
  },
  {
    title: "Solo Founder & Engineer",
    company_name: "Applyd Hub (Afoo Inc)",
    icon: images.applydhubLogo,
    date: "Mar 2026 - Present",
    points: [
      "Designed, built and shipped a full-stack app to the App Store and Google Play (Expo, React Native, NativeWind, Express, PostgreSQL), with AI that tailors career documents.",
      "Started it as a tool for my own job search, then tested it with potential users before publishing. 30+ downloads so far.",
      "Handle everything after launch myself: store listings, marketing and support."
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "Neo64 GmbH",
    icon: images.neo64,
    date: "Jul 2023 – Aug 2024",
    points: [
      "Built Flutter screens and the login, cart and checkout logic for B2B grocery apps Rungis Express (Germany and Austria) and Fideco (Switzerland), working from another agency's designs against a third-party backend.",
      "Adapted one shared codebase to launch the Swiss app with its own branding, routing and data storage.",
      "Built a corporate site for Klierfeld GmbH (SvelteKit, Storyblok CMS) and dashboard features for the Wedflix streaming platform (Svelte, TypeScript, Tailwind)."
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "DigiSign Technologies Limited",
    icon: images.digisignLogo,
    date: "Dec 2022 – May 2023",
    points: [
      "Built reusable UI components for a document-signing dashboard with biometric verification (Next.js, TypeScript, Ant Design).",
      "Wrote unit tests with Jest and end-to-end tests with Playwright."
    ]
  }
];

export const works: WorkItem[] = [
  {
    id: 6,
    title: "Applyd Hub",
    shortDescription:
      "A career document and application manager that ends tailoring fatigue for job and scholarship seekers.",
    caseStudy: {
      problem:
        "Every job or scholarship application means rewriting your CV from scratch. I was facing this myself.",
      role: "Solo: product, design, mobile, backend, launch and marketing.",
      approach: [
        "Built it for my own applications first. When I showed it to a few people, they wanted it too, so I turned it into a product.",
        "One profile works as the single source of truth, and tailored documents are generated from it.",
        "Instead of starting over, the AI improves a document step by step.",
        "Tracks each job and scholarship from saved to offer, with a compatibility score before you apply."
      ],
      result:
        "Live on the App Store and Google Play, with 30+ downloads and growing."
    },
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
    id: 1,
    title: "Propatis HQ",
    shortDescription:
      "A comprehensive real estate platform that simplifies property management and tenant interactions for businesses and individuals.",
    caseStudy: {
      problem:
        "Real estate businesses run properties, tenants and requests across scattered tools, and their listings live on separate sites.",
      role: "Founding engineer and product lead in a team of 4.",
      approach: [
        "Built the mobile app by myself and set the product roadmap.",
        "After launch, user feedback showed both the B2B and B2C experiences were hard to use, so I took over design: the landing page is redesigned, B2B is next, then B2C.",
        "Ran paid campaigns, set up analytics to see where users come from, and pitched and onboarded clients one on one.",
        "One platform covers three sides: management for businesses, listings on their own websites, and a public marketplace."
      ],
      result:
        "~200 daily visitors and 80+ sign-ups. The new landing page is done, and the mobile app is awaiting App Store and Google Play approval."
    },
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
    id: 8,
    title: "Perry Luscious",
    shortDescription:
      "A website for a Lyon-based bakery to showcase its cakes and take customer orders.",
    caseStudy: {
      problem:
        "A Lyon pâtisserie took orders through social media messages, which meant a lot of back and forth over designs, details and delivery.",
      role: "Freelance: product thinking, design, build, SEO and analytics.",
      approach: [
        "Designed ordering around how she works: customers pick a design, customise it and set delivery in one flow, so orders arrive complete.",
        "Kept the path from browsing to checkout deliberately short, with her creations shown so customers see what to expect.",
        "Built a French and English site the owner can update herself through Sanity.",
        "Added SEO, plus Google Tag Manager connected to TikTok and Instagram, so she can see which channel brings customers and put her effort there."
      ],
      result:
        "Around 80% of her orders, about 20 a month, now come through the website, with far less back and forth.",
      testimonial: {
        quote:
          "The website is very seamless. Customers can put in every detail they want and customise their order, and see their choices without asking lots of questions. It gave my business a premium look, helped me keep customers and brought in new ones.",
        name: "Owner, Perry Luscious"
      }
    },
    image: images.perryluscious,
    company: "Freelance",
    focus: "50% 0%",
    // maroon banner on top, cream page below
    letterbox: "linear-gradient(#622a30 50%, #f3e3d0 50%)",
    letterboxLgOnly: true,
    type: "web",
    tech: ["Next.js", "Tailwind", "Sanity"],
    webUrl: "https://perryluscious.com",
    githubUrl: ""
  },
  {
    id: 7,
    title: "Lab Brain",
    shortDescription:
      "An open-source research workspace that links samples, characterization, analysis and conclusions for materials science.",
    caseStudy: {
      problem:
        "Research data ends up scattered across folders, spreadsheets, slides and notes, so results can't be traced back to the sample that produced them.",
      role: "Solo, built for my own PhD research.",
      approach: [
        "I had a Python workflow in VS Code. When a labmate asked me about my analysis, I realised the same tools could help people who don't code, so I built a UI on top.",
        "It links sample, characterization, analysis and conclusion, so the next researcher can pick up my work and my supervisor can follow my progress easily.",
        "Runs characterization calculations and plots (EDX, ellipsometry, FTIR), with an AI assistant that answers from your own records.",
        "Tested with Vitest and Playwright."
      ],
      result:
        "I use it several times a week to log and analyse my experiments, and it's open source with a live demo.",
      contribution: {
        name: "OPTIMEO",
        href: "https://optimeo.streamlit.app/",
        description: "our lab's Bayesian optimisation web app"
      }
    },
    image: images.labBrain,
    company: "Open source",
    focus: "50% 50%",
    letterbox: "#111111",
    type: "web",
    tech: [
      "Next.js",
      "Tailwind",
      "Vitest",
      "Playwright",
      "AI assistant (bring your own key)"
    ],
    webUrl: "https://lab-brain-demo.onrender.com",
    githubUrl: "https://github.com/Afoojnr/lab-brain"
  },
  {
    id: 2,
    title: "Rungis Express App",
    shortDescription:
      "A B2B e-commerce mobile app for a major food trading company operating in Germany and Austria.",
    fullDescription:
      "Built the mobile commerce experience for Rungis Express GmbH at Neo64, working from another agency's designs against a third-party backend.\n\n" +
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
      "Created for Fideco AG, a Swiss partner of Rungis Express, from the same monorepo as the Rungis Express app.\n\nKey Contributions:\n• Adapted the core e-commerce logic for the Swiss market\n• Customized UI components to match Fideco's specific branding\n• Managed separate routing and data storage requirements while maintaining a shared codebase.",
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
      "My first role: a high-security dashboard ensuring authenticity of digital signers.\n\n" +
      "Key Contributions:\n" +
      "• Developed reusable UI components for a seamless user experience\n" +
      "• Wrote unit tests with Jest and end-to-end tests with Playwright\n" +
      "• Collaborated on secure onboarding and authentication flows\n" +
      "• Supported dashboard features for document tracking",
    image: images.digisign,
    company: "DigiSign Technologies Limited",
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
    shortDescription:
      "A modern corporate profile website for a German photovoltaic installation service provider.",
    fullDescription:
      "A highly responsive corporate site for Klierfeld GmbH, a German company, designed to showcase its green energy services.\n\nKey Contributions:\n• Seamless content management integration using Storyblok CMS\n• Styled using SCSS for a bespoke, modern look\n• Optimized for speed and SEO performance.",
    image: images.klierfeld,
    company: "Neo64 GmbH",
    focus: "50% 0%",
    letterbox: "#f6f6f6",
    letterboxLgOnly: true,
    type: "web",
    tech: ["SvelteKit", "SCSS", "TypeScript", "Storyblok"],
    webUrl: "http://www.klierfeld-gmbh.com/",
    githubUrl: ""
  }
];

export const featuredWorks = works.filter(work => work.caseStudy);
export const moreWorks = works.filter(work => !work.caseStudy);

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
