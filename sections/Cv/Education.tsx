import { getTranslations } from "next-intl/server";

import { education } from "@/constants/cv";
import { getDateFormat } from "./dates";

// stacked for the sidebar column
const Education = async () => {
  const t = await getTranslations("cv");
  const dates = await getDateFormat();

  return (
    <div className="space-y-[2mm]">
      {education.map(item => (
        <article key={item.id} className="break-inside-avoid">
          <h3 className="text-[9pt] font-semibold">
            {t(`education.${item.id}.degree`)}
          </h3>
          <p className="text-[7.8pt] text-[#55534e]">
            {t(`education.${item.id}.school`)}
            {" · "}
            {item.expected
              ? `${dates.month(item.start)} – ${t("expected", {
                  date: dates.month(item.end)
                })}`
              : dates.range(item.start, item.end, item.yearsOnly)}
          </p>
          <p className="mt-[0.4mm] text-[8.1pt]">
            {t(`education.${item.id}.detail`)}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Education;
