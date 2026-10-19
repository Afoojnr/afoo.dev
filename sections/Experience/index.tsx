import Reveal from "@/components/ui/Reveal";
import Skills from "./Skills";
import Timeline from "./Timeline";

const Experience = () => (
  <section
    id="experience"
    data-catalogue
    aria-labelledby="experience-title"
    className="px-gutter max-w-page mx-auto w-full scroll-mt-16 py-24"
  >
    <Reveal>
      <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
        <h2 id="experience-title" className="text-lead font-semibold">
          Experience
        </h2>
        <p className="text-caption text-ink-soft uppercase">
          Dec 2022 — Present
        </p>
      </div>
    </Reveal>

    <div className="mt-10 md:mt-14">
      <Timeline />
    </div>

    <Skills />
  </section>
);

export default Experience;
