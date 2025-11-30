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

export interface ExperienceItem {
  title: string;
  company_name: string;
  icon: string | StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}
