import { useTranslations } from "next-intl";

import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/constants";
import { useDateRange } from "@/hooks/useDateRange";
import Skills from "./Skills";
import Timeline from "./Timeline";

// "YYYY-MM" strings sort by date, so the earliest start opens the range
const firstStart = experiences.map(role => role.start).sort()[0];

const Experience = () => {
  const t = useTranslations("experience");
  const dateRange = useDateRange();

  return (
    <section
      id="experience"
      data-catalogue
      aria-labelledby="experience-title"
      className="px-gutter max-w-page mx-auto w-full scroll-mt-16 py-24"
    >
      <Reveal>
        <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
          <h2 id="experience-title" className="text-lead font-semibold">
            {t("title")}
          </h2>
          <p className="text-caption text-ink-soft uppercase">
            {dateRange(firstStart)}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 md:mt-14">
        <Timeline />
      </div>

      <Skills />
    </section>
  );
};

export default Experience;
