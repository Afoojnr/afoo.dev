import type { MetadataRoute } from "next";

import { site } from "@/lib/brand";

/**
 * Lets every crawler in and points them at the sitemap.
 * @returns the robots.txt rules
 */
const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: `${site.url}/sitemap.xml`
});

export default robots;
