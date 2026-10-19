import type { MetadataRoute } from "next";

import { site } from "@/lib/brand";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: site.url, changeFrequency: "monthly", priority: 1 }
];

export default sitemap;
