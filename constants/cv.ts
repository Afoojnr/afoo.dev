import type { Messages } from "@/i18n/messages";
import type { RoleId, WorkSlug } from "@/types";
import { contact, works } from "./index";

type SummaryId = keyof Messages["cv"]["summaries"];
type EducationId = keyof Messages["cv"]["education"];
type CvSkillGroupId = keyof Messages["cv"]["skillGroups"];

// one CV per kind of job: copy a variant, change what it shows, export it
export type CvVariant = {
  summary: SummaryId;
  roles: RoleId[];
  // keep only these bullets (by position) for a role; omit to keep them all
  points?: Partial<Record<RoleId, number[]>>;
  projects: WorkSlug[];
  skills: CvSkillGroupId[];
  educationFirst?: boolean;
};

export const cvVariants = {
  product: {
    summary: "product",
    roles: ["propatis", "applyd-hub", "neo64", "digisign"],
    points: { "applyd-hub": [0, 1] },
    projects: ["lab-brain", "perry-luscious"],
    skills: ["languages", "frameworks", "testing", "tools"]
  },
  research: {
    summary: "research",
    roles: ["propatis", "applyd-hub", "neo64", "digisign"],
    points: { propatis: [0, 1, 2] },
    projects: ["lab-brain"],
    skills: ["languages", "frameworks", "testing", "tools"],
    educationFirst: true
  }
} satisfies Record<string, CvVariant>;

export type CvVariantId = keyof typeof cvVariants;
export const defaultCvVariant: CvVariantId = "product";

export const isCvVariant = (value?: string): value is CvVariantId =>
  value !== undefined && value in cvVariants;

const linkOf = (slug: WorkSlug) => {
  const work = works.find(item => item.slug === slug);
  return work?.mobileUrl ?? work?.webUrl;
};

// names in experience bullets that become clickable on the CV
export const cvInlineLinks: Record<string, string | undefined> = {
  "Rungis Express": linkOf("rungis"),
  Fideco: linkOf("fideco"),
  "Klierfeld GmbH": linkOf("klierfeld")
};

// fuller than the site's skill groups: an ATS matches job ads word for word
export const cvSkills: Record<CvSkillGroupId, string[]> = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Dart",
    "SQL",
    "HTML",
    "CSS"
  ],
  frameworks: [
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "Flutter",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "NativeWind",
    "TanStack Query",
    "React Hook Form",
    "Framer Motion"
  ],
  testing: ["Jest", "Vitest", "Playwright"],
  tools: ["Git", "GitHub", "Docker", "PostgreSQL", "Figma", "Jira", "Sanity"]
};

export const cvContact = {
  phone: "+33 7 49 17 46 82",
  email: contact.email,
  links: [
    { label: "afoo.dev", href: "https://afoo.dev" },
    {
      label: "linkedin.com/in/abdulhamidafolabi",
      href: "https://www.linkedin.com/in/abdulhamidafolabi"
    },
    { label: "github.com/Afoojnr", href: "https://github.com/Afoojnr" }
  ]
};

// dates are "YYYY-MM"; yearsOnly shows just the years
export const education: {
  id: EducationId;
  start: string;
  end: string;
  expected?: boolean;
  yearsOnly?: boolean;
}[] = [
  { id: "phd", start: "2024-10", end: "2027-09", expected: true },
  { id: "grenoble", start: "2023-08", end: "2024-08" },
  { id: "darmstadt", start: "2022-10", end: "2023-08" },
  { id: "funaab", start: "2014-09", end: "2019-12", yearsOnly: true }
];
