import Providers from "@/components/Providers";

// theme, cursor and scroll effects belong to the portfolio, not the printable CV
export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
