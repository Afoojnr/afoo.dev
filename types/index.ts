import { StaticImageData } from "next/image";

export type WorkItem = {
  id: number;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
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
