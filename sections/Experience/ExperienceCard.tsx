import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";

import { ExperienceItem } from "@/types";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--accent)",
        color: "var(--foreground)"
      }}
      contentArrowStyle={{
        borderRight: "7px solid var(--accent)"
      }}
      date={experience.date}
      iconStyle={{
        background:"#F9FBFC",
      }}
      icon={
        <div className=" flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-foreground text-2xl font-bold">
          {experience.title}
        </h3>
        <p className="text-muted-foreground m-0 text-base font-semibold">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-muted-foreground text-sm leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default ExperienceCard;
