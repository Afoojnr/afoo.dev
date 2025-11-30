import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { images } from "@/constants/images";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mokoto = localFont({
  src: "../public/Mokoto.ttf",
  variable: "--font-mokoto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AFOO",
  description: "Afolabi's Tech Portfolio",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: images.logoLight.src,
        href: images.logoLight.src,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: images.logoDark.src,
        href: images.logoDark.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${mokoto.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
