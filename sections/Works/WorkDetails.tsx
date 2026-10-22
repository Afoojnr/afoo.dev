import * as Dialog from "@radix-ui/react-dialog";

import type { WorkDetailsText } from "@/types";

type WorkDetailsProps = {
  details: WorkDetailsText;
  tech: string[];
};

// the sheet body for works without a case study (the More work list)
const WorkDetails = ({ details, tech }: WorkDetailsProps) => (
  <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
    <div>
      <Dialog.Description asChild>
        <p className="text-ink-soft max-w-[50ch]">{details.intro}</p>
      </Dialog.Description>

      <ul className="mt-6 flex flex-wrap gap-2">
        {tech.map(item => (
          <li
            key={item}
            className="border-line text-ink-soft rounded-full border px-3 py-0.5 text-[0.8125rem]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-caption text-ink-soft mb-3 font-semibold uppercase">
        {details.heading}
      </h3>
      <ul className="text-ink-soft space-y-1.5">
        {details.bullets.map(point => (
          <li
            key={point}
            className="before:bg-ink-soft relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-[5px] before:rounded-full before:content-['']"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default WorkDetails;
