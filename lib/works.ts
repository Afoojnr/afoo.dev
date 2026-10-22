import type { CaseStudyText, WorkItem, WorkText } from "@/types";

export type WorkKind =
  "webAndMobile" | "mobile" | "web" | "fullstack" | "other";
export type WorkLinkKind =
  "website" | "appStore" | "app" | "googlePlay" | "code";

export const workKind = (work: WorkItem): WorkKind =>
  work.webUrl && (work.mobileUrl || work.playStoreUrl)
    ? "webAndMobile"
    : work.type;

export const workLinks = (work: WorkItem) => {
  const links: { kind: WorkLinkKind; href: string }[] = [];

  if (work.webUrl) links.push({ kind: "website", href: work.webUrl });
  if (work.mobileUrl && work.mobileUrl !== work.webUrl) {
    const store = work.mobileUrl.includes("apps.apple.com");
    links.push({ kind: store ? "appStore" : "app", href: work.mobileUrl });
  }
  if (work.playStoreUrl)
    links.push({ kind: "googlePlay", href: work.playStoreUrl });
  if (work.githubUrl) links.push({ kind: "code", href: work.githubUrl });

  return links;
};

// translated tags (like Lab Brain's AI assistant note) follow the fixed ones
export const workTech = (work: WorkItem, text: WorkText) => [
  ...work.tech,
  ...(text.extraTech ?? [])
];

export const isCaseStudy = (text: WorkText): text is WorkText & CaseStudyText =>
  "problem" in text;
