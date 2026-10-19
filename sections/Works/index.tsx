import Reveal from "@/components/ui/Reveal";
import { works } from "@/constants";
import WorkStack from "./WorkStack";

const Works = () => (
  <section
    id="works"
    data-catalogue
    aria-labelledby="works-title"
    className="px-gutter max-w-page mx-auto w-full scroll-mt-16 pt-24 pb-24"
  >
    <Reveal>
      <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
        <h2 id="works-title" className="text-lead font-semibold">
          Works
        </h2>
        <p className="text-caption text-ink-soft uppercase">
          {works.length} projects
        </p>
      </div>
    </Reveal>

    <div className="mt-10 md:mt-14">
      <WorkStack />
    </div>
  </section>
);

export default Works;
