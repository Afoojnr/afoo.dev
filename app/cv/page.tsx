import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { defaultCvVariant, isCvVariant } from "@/constants/cv";
import CvDocument from "@/sections/Cv";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("cv");
  return { title: t("documentTitle"), robots: { index: false, follow: false } };
};

type CvPageProps = {
  searchParams: Promise<{ variant?: string }>;
};

// /cv?variant=research previews a variant; yarn cv:export turns them into PDFs
export default async function CvPage({ searchParams }: CvPageProps) {
  const { variant } = await searchParams;

  return (
    <main className="min-h-screen bg-[#d9d7d2] py-10 print:bg-white print:py-0">
      <style>{`@page { size: A4; margin: 0; } @media print { html, body { background: #fff !important; } }`}</style>
      <CvDocument
        variantId={isCvVariant(variant) ? variant : defaultCvVariant}
      />
    </main>
  );
}
