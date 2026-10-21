import { StaticImageData } from "next/image";

export type Testimonial = {
  quote: string;
  name: string;
  // sample copy until the real quote arrives; kept out of production builds
  placeholder?: boolean;
};

export type CaseStudy = {
  problem: string;
  role: string;
  approach: string[];
  result: string;
  // a related project I contributed to, linked from the result
  contribution?: { name: string; href: string; description: string };
  testimonial?: Testimonial;
};

export type WorkItem = {
  id: number;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  // featured works open as a case study; the rest use fullDescription
  caseStudy?: CaseStudy;
  image: StaticImageData;
  images?: StaticImageData[];
  type: "web" | "mobile" | "fullstack" | "other";
  company?: string;
  // object-position for the card crop
  focus?: string;
  // show the whole image on this background instead of cropping
  letterbox?: string;
  letterboxLgOnly?: boolean;
  tech: string[];
  webUrl?: string;
  mobileUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
};

export type ExperienceItem = {
  title: string;
  company_name: string;
  icon: StaticImageData;
  date: string;
  points: string[];
};

export type SkillItem = {
  name: string;
  icon: StaticImageData;
};
