import { getMessages, getTranslations } from "next-intl/server";

import { works } from "@/constants";
import type { CvVariant } from "@/constants/cv";
import { isCaseStudy } from "@/lib/works";
import type { WorkText } from "@/types";

const Projects = async ({ variant }: { variant: CvVariant }) => {
  const projects = (await getMessages()).works.projects as Record<
    string,
    WorkText
  >;
  const t = await getTranslations("works");

  return (
    <div className="space-y-[2.4mm]">
      {variant.projects.map(slug => {
        const work = works.find(item => item.slug === slug);
        if (!work) return null;
        const text = projects[slug];
        const link = work.webUrl ?? work.mobileUrl;

        return (
          <article key={slug} className="break-inside-avoid">
            <h3 className="text-[9.5pt] font-semibold">{work.title}</h3>
            <p className="text-[8pt] text-[#55534e]">
              {text.company}
              {link && (
                <>
                  {" · "}
                  <a href={link}>{new URL(link).host.replace(/^www\./, "")}</a>
                </>
              )}
            </p>
            {/* one text node per sentence pair: PDF readers drop spaces that sit alone */}
            <p className="mt-[0.6mm] text-[8.5pt]">
              {`${text.short} ${isCaseStudy(text) ? text.result : text.intro} `}
              {isCaseStudy(text) &&
                text.contribution &&
                work.contributionUrl &&
                t.rich("contribution", {
                  ...text.contribution,
                  link: chunks => <a href={work.contributionUrl}>{chunks}</a>
                })}
            </p>
            <p className="mt-[0.6mm] text-[7.8pt] text-[#55534e]">
              {work.tech.join(" · ")}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
