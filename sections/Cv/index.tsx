import { getTranslations } from "next-intl/server";

import {
  cvSkills,
  cvVariants,
  type CvVariant,
  type CvVariantId
} from "@/constants/cv";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";
import Section from "./Section";

// an A4 sheet; fixed colours so a visitor's dark mode never reaches the PDF.
// Arial for the text: it is the font whose PDF text extracts cleanly, so an
// ATS reads whole words and an unbroken email address. --cv-accent is the one
// colour: dark enough to stay readable on a black-and-white printout.
// Two columns on paper, but the DOM (and so the PDF text an ATS reads) runs
// header, profile, experience, projects, then the sidebar, top to bottom.
const CvDocument = async ({ variantId }: { variantId: CvVariantId }) => {
  const variant: CvVariant = cvVariants[variantId];
  const t = await getTranslations("cv");
  const languages = t.raw("languages") as { name: string; level: string }[];

  const education = (
    <Section title={t("headings.education")}>
      <Education />
    </Section>
  );

  return (
    <article className="mx-auto min-h-[297mm] w-[210mm] bg-white px-[14mm] py-[10mm] font-[Arial,Helvetica,sans-serif] leading-[1.38] text-[#1e1e1c] shadow-[0_8px_40px_rgb(0_0_0/0.18)] [--cv-accent:#1d4ed8] print:shadow-none">
      <Header />

      <div className="mt-[1mm] grid grid-cols-[minmax(0,1fr)_50mm] gap-x-[7mm]">
        <div>
          <Section title={t("headings.profile")}>
            <p className="text-[8.5pt]">{t(`summaries.${variant.summary}`)}</p>
          </Section>

          <Section title={t("headings.experience")}>
            <Experience variant={variant} />
          </Section>

          <Section title={t("headings.projects")}>
            <Projects variant={variant} />
          </Section>
        </div>

        <aside>
          {variant.educationFirst && education}

          <Section title={t("headings.skills")}>
            <dl className="space-y-[1.4mm] text-[8.1pt]">
              {variant.skills.map(id => (
                <div key={id}>
                  <dt className="font-semibold">{t(`skillGroups.${id}`)}</dt>
                  <dd>{cvSkills[id].join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Section>

          {!variant.educationFirst && education}

          <Section title={t("headings.languages")}>
            <ul className="space-y-[0.6mm] text-[8.1pt]">
              {languages.map(language => (
                <li key={language.name}>
                  <span className="font-semibold">{language.name}</span>
                  {" · "}
                  {language.level}
                </li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>
    </article>
  );
};

export default CvDocument;
