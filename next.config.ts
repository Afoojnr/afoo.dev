import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// points next-intl at i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // the CV used to live here; keep old links working
  redirects: async () => [
    {
      source: "/afoo_cv.pdf",
      destination: "/Abdulhamid-Afolabi-CV.pdf",
      permanent: false
    }
  ]
};

export default withNextIntl(nextConfig);
