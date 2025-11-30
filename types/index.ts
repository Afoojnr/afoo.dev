import { StaticImageData } from "next/image";

export type WorkItem = {
  id: number;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  type: "web" | "mobile" | "fullstack" | "other";
  tech: string[];
  webUrl?: string;
  mobileUrl?: string;
  githubUrl?: string;
};

export type ExperienceItem = {
  title: string;
  company_name: string;
  icon: string | StaticImageData;
  date: string;
  points: string[];
}

export type SkillItem = {
  name: string;
  icon: string | StaticImageData;
}