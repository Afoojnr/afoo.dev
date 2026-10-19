import type { MetadataRoute } from "next";

import { site } from "@/lib/brand";

/**
 * The site is one page, so the sitemap is one entry.
 * @returns the sitemap entries
 */
const sitemap = (): MetadataRoute.Sitemap => [
  { url: site.url, changeFrequency: "monthly", priority: 1 }
];

export default sitemap;
