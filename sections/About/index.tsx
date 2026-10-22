import { useTranslations } from "next-intl";

import Reveal from "@/components/ui/Reveal";
import Story from "./Story";

const About = () => {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      data-catalogue
      aria-labelledby="about-title"
      className="px-gutter max-w-page mx-auto w-full pt-24 pb-12 lg:pb-16"
    >
      <Reveal>
        <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
          <h2 id="about-title" className="text-lead font-semibold">
            {t("title")}
          </h2>
          <p className="text-caption text-ink-soft uppercase">
            Abdulhamid Afolabi
          </p>
        </div>
      </Reveal>

      <Story />
    </section>
  );
};

export default About;
