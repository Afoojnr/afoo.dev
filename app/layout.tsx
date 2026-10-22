import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { contact, socialLinks } from "@/constants";
import { site } from "@/lib/brand";
import "./globals.css";

// width axis is needed for the hero name effect
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap"
});

const mokoto = localFont({
  src: "../public/Mokoto.ttf",
  variable: "--font-mokoto",
  display: "swap"
});

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale();
  const t = await getTranslations("metadata");
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: "/",
      siteName: site.name,
      title,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Afoojnr"
    }
  };
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4e3df" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1a" }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Software Engineer",
  url: site.url,
  email: `mailto:${contact.email}`,
  worksFor: { "@type": "Organization", name: "Propatis HQ" },
  sameAs: socialLinks.map(link => link.href)
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${archivo.variable} ${mokoto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {/* cookieless page views; only reports on Vercel deployments */}
        <Analytics />
      </body>
    </html>
  );
}
