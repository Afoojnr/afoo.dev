import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import Providers from "@/components/Providers";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@Afoojnr"
  }
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${mokoto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
