import { getTranslations } from "next-intl/server";

import { experiences } from "@/constants";
import { cvInlineLinks, type CvVariant } from "@/constants/cv";
import { getDateFormat } from "./dates";

const names = Object.keys(cvInlineLinks).sort((a, b) => b.length - a.length);
const pattern = new RegExp(`(${names.join("|")})`);

// turns known product names into links; the text an ATS reads stays the same
const linkify = (text: string) =>
  text.split(pattern).map((part, i) => {
    const href = cvInlineLinks[part];
    return href ? (
      <a key={i} href={href} className="text-(--cv-accent)">
        {part}
      </a>
    ) : (
      part
    );
  });

const Experience = async ({ variant }: { variant: CvVariant }) => {
  const t = await getTranslations("experience.roles");
  const cv = await getTranslations("cv");
  const dates = await getDateFormat();

  return (
    <div className="space-y-[2.2mm]">
      {variant.roles.map(id => {
        const role = experiences.find(item => item.id === id);
        if (!role) return null;
        const points = t.raw(`${id}.points`) as string[];
        const keep = variant.points?.[id];
        const shown = keep ? keep.map(i => points[i]).filter(Boolean) : points;

        return (
          <article key={id} className="break-inside-avoid">
            <div className="flex items-baseline justify-between gap-[4mm]">
              <h3 className="text-[9.5pt] font-semibold">{t(`${id}.title`)}</h3>
              <p className="shrink-0 text-[8.2pt] text-[#55534e] tabular-nums">
                {dates.range(role.start, role.end)}
              </p>
            </div>
            <p className="text-[8.2pt] text-[#55534e]">
              {role.url ? (
                <a href={role.url} className="text-(--cv-accent)">
                  {t(`${id}.company`)}
                </a>
              ) : (
                t(`${id}.company`)
              )}
              {` · ${cv(`roleLocations.${id}`)}`}
            </p>
            <ul className="mt-[1mm] space-y-[0.3mm] pl-[3.5mm]">
              {shown.map(point => (
                <li key={point} className="list-disc text-[8.5pt]">
                  {linkify(point)}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default Experience;
