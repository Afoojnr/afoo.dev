import { StaticImageData } from "next/image";

import type { Messages } from "@/i18n/messages";

export type WorkSlug = keyof Messages["works"]["projects"];
export type RoleId = keyof Messages["experience"]["roles"];
export type SkillGroupId = keyof Messages["experience"]["skillGroups"];

export type Testimonial = {
  quote: string;
  name: string;
  // sample copy until the real quote arrives; kept out of production builds
  placeholder?: boolean;
};

export type CaseStudyText = {
  problem: string;
  role: string;
  approach: string[];
  result: string;
  // a related project I contributed to, linked from the result
  contribution?: { name: string; description: string };
  testimonial?: Testimonial;
};

export type WorkDetailsText = {
  intro: string;
  heading: string;
  bullets: string[];
};

// the translated text for one work in messages/<locale>/works.json
export type WorkText = {
  company: string;
  short: string;
  extraTech?: string[];
} & (CaseStudyText | WorkDetailsText);

export type WorkItem = {
  id: number;
  // key of its text in works.json
  slug: WorkSlug;
  title: string;
  // featured works open as a case study; the rest show their details
  featured?: boolean;
  image: StaticImageData;
  type: "web" | "mobile" | "fullstack" | "other";
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
  contributionUrl?: string;
};

export type ExperienceItem = {
  id: RoleId;
  icon: StaticImageData;
  url?: string;
  // "YYYY-MM"; no end means it's current
  start: string;
  end?: string;
};

export type SkillItem = {
  name: string;
  icon: StaticImageData;
};

export type SkillGroup = {
  id: SkillGroupId;
  skills: SkillItem[];
};
