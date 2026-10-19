import type { WorkItem } from "@/types";

export type WorkBlock = {
  heading?: string;
  /** Plain lines, such as "B2B: Manage properties…". */
  lines: string[];
  bullets: string[];
};

/**
 * Splits a project's long description into an intro and blocks of plain
 * lines and bullet lists, so the case study can set each properly. Blocks are
 * separated by blank lines, bullets start with "•", and a line ending in a
 * colon above bullets is their heading.
 * @param text - the project's fullDescription
 * @returns the intro sentence(s) and the blocks that follow
 */
export const parseDescription = (text = "") => {
  const [rawIntro = "", ...rest] = text
    .split("\n\n")
    .map(part => part.trim())
    .filter(Boolean);

  const blocks: WorkBlock[] = rest.map(part => {
    const lines = part
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);
    const bullets = lines
      .filter(line => line.startsWith("•"))
      .map(line => line.replace(/^•\s*/, ""));
    const plain = lines.filter(line => !line.startsWith("•"));
    const heading =
      bullets.length && plain[0]?.endsWith(":")
        ? plain[0].slice(0, -1)
        : undefined;

    return { heading, lines: heading ? plain.slice(1) : plain, bullets };
  });

  // An intro that ends in a colon leads into the plain lines that follow
  const intro = blocks[0]?.lines.length
    ? rawIntro.replace(/:$/, ".")
    : rawIntro;

  return { intro, blocks };
};

/** "Web & Mobile", "Mobile" and so on, from what the project ships on. */
export const workKind = (work: WorkItem) => {
  if (work.webUrl && (work.mobileUrl || work.playStoreUrl))
    return "Web & Mobile";
  const kinds = {
    mobile: "Mobile",
    web: "Web",
    fullstack: "Full stack",
    other: "Project"
  };
  return kinds[work.type];
};

/** The links a project actually has, with the same address listed once. */
export const workLinks = (work: WorkItem) => {
  const links: { label: string; short: string; href: string }[] = [];

  if (work.webUrl)
    links.push({ label: "Visit website", short: "Website", href: work.webUrl });
  if (work.mobileUrl && work.mobileUrl !== work.webUrl) {
    const store = work.mobileUrl.includes("apps.apple.com");
    links.push({
      label: store ? "View on the App Store" : "Open the app",
      short: store ? "App Store" : "App",
      href: work.mobileUrl
    });
  }
  if (work.playStoreUrl)
    links.push({
      label: "Get it on Google Play",
      short: "Google Play",
      href: work.playStoreUrl
    });
  if (work.githubUrl)
    links.push({
      label: "View the code",
      short: "Code",
      href: work.githubUrl
    });

  return links;
};
