import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

import TextLink from "@/components/ui/TextLink";
import type { CaseStudy as CaseStudyData, Testimonial } from "@/types";

type CaseStudyProps = {
  study: CaseStudyData;
  tech: string[];
};

// sample quotes help judge the layout locally but must never ship as real proof
const visibleTestimonial = (testimonial?: Testimonial) =>
  testimonial?.placeholder && process.env.NODE_ENV === "production"
    ? undefined
    : testimonial;

const Part = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h3 className="text-caption text-ink-soft mb-3 font-semibold uppercase">
      {title}
    </h3>
    {children}
  </div>
);

const Quote = ({ testimonial }: { testimonial: Testimonial }) => (
  <figure
    className={
      testimonial.placeholder
        ? "border-line rounded-plate border border-dashed p-5"
        : ""
    }
  >
    {testimonial.placeholder && (
      <p className="text-caption text-ink-soft mb-3 uppercase">
        Sample quote · dev only, replace before publishing
      </p>
    )}
    <blockquote className="text-ink text-[clamp(1.25rem,1rem+0.8vw,1.625rem)] leading-[1.3] tracking-tight text-pretty">
      “{testimonial.quote}”
    </blockquote>
    <figcaption className="text-ink-soft mt-3">{testimonial.name}</figcaption>
  </figure>
);

const CaseStudy = ({ study, tech }: CaseStudyProps) => {
  const testimonial = visibleTestimonial(study.testimonial);

  return (
    <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
      <div className="space-y-8">
        <Part title="The problem">
          <Dialog.Description asChild>
            <p className="text-ink max-w-[40ch] text-[clamp(1.125rem,0.95rem+0.6vw,1.375rem)] leading-[1.35] tracking-tight text-pretty">
              {study.problem}
            </p>
          </Dialog.Description>
        </Part>

        <Part title="My role">
          <p className="text-ink-soft max-w-[50ch]">{study.role}</p>
        </Part>

        <ul className="flex flex-wrap gap-2">
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

      <div className="space-y-8">
        <Part title="What I did">
          <ul className="text-ink-soft space-y-1.5">
            {study.approach.map(point => (
              <li
                key={point}
                className="before:bg-ink-soft relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-[5px] before:rounded-full before:content-['']"
              >
                {point}
              </li>
            ))}
          </ul>
        </Part>

        <Part title="Result">
          <p className="text-ink max-w-[50ch] font-semibold">{study.result}</p>
          {study.contribution && (
            <p className="text-ink-soft mt-3 max-w-[50ch]">
              Separately, I contribute to{" "}
              <TextLink href={study.contribution.href} external>
                {study.contribution.name}
              </TextLink>
              , {study.contribution.description}.
            </p>
          )}
        </Part>

        {testimonial && <Quote testimonial={testimonial} />}
      </div>
    </div>
  );
};

export default CaseStudy;
