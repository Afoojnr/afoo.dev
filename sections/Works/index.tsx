import { useTranslations } from "next-intl";

import Reveal from "@/components/ui/Reveal";
import { works } from "@/constants";
import Catalogue from "./Catalogue";

const Works = () => {
  const t = useTranslations("works");

  return (
    <section
      id="works"
      data-catalogue
      aria-labelledby="works-title"
      className="px-gutter max-w-page mx-auto w-full scroll-mt-16 pt-24 pb-24"
    >
      <Reveal>
        <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
          <h2 id="works-title" className="text-lead font-semibold">
            {t("title")}
          </h2>
          <p className="text-caption text-ink-soft uppercase">
            {t("count", { count: works.length })}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 md:mt-14">
        <Catalogue />
      </div>
    </section>
  );
};

export default Works;
