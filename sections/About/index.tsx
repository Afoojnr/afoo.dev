import Reveal from "@/components/ui/Reveal";
import Story from "./Story";

/**
 * About: a heading, then one pinned scene: the portrait on the left and a
 * short story on the right that lights up word by word as you scroll. The
 * career timeline lives in Experience, so no dates appear beyond the story.
 * @returns the about section
 */
const About = () => (
  <section
    id="about"
    data-catalogue
    aria-labelledby="about-title"
    className="px-gutter max-w-page mx-auto w-full pt-24 pb-12 lg:pb-16"
  >
    <Reveal>
      <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
        <h2 id="about-title" className="text-lead font-semibold">
          About
        </h2>
        <p className="text-caption text-ink-soft uppercase">
          Abdulhamid Afolabi
        </p>
      </div>
    </Reveal>

    <Story />
  </section>
);

export default About;
