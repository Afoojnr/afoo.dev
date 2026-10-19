import { StaticImageData } from "next/image";

export type WorkItem = {
  id: number;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  image: StaticImageData;
  images?: StaticImageData[];
  type: "web" | "mobile" | "fullstack" | "other";
  /** Where it was built, matching a company in the Experience list. */
  company?: string;
  /** CSS object-position that keeps the best part of the image in view. */
  focus?: string;
  /** Show the whole image instead of cropping it, on this backdrop (any CSS background). */
  letterbox?: string;
  /** Letterbox only on wide screens; phones keep the cropped fill. */
  letterboxLgOnly?: boolean;
  tech: string[];
  webUrl?: string;
  mobileUrl?: string;
  /** Google Play listing, for apps shipped to both stores. */
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
