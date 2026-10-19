"use client";

import { useEffect, useRef } from "react";

type Axes = {
  wdth: number;
  wght: number;
};

type ProximityTextProps = {
  text: string;
  rest?: Axes;
  peak?: Axes;
  radius?: number;
};

type Anchor = { x: number; y: number };

// wait for the entrance animation so positions are final
const READY_AFTER_MS = 1400;
// half-lives in seconds
const RISE = 0.12;
const FALL = 0.18;
const VERTICAL_WEIGHT = 0.6;
const SETTLED = 0.004;

const REST_DEFAULT: Axes = { wdth: 84, wght: 800 };
const PEAK_DEFAULT: Axes = { wdth: 125, wght: 380 };

const smoothstep = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const round = (n: number) => Math.round(n * 10) / 10;
const settings = ({ wdth, wght }: Axes) => `"wdth" ${wdth}, "wght" ${wght}`;

const ProximityText = ({
  text,
  rest = REST_DEFAULT,
  peak = PEAK_DEFAULT,
  radius = 300
}: ProximityTextProps) => {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const letters = Array.from(
      container.querySelectorAll<HTMLElement>("[data-letter]")
    );
    const progress = letters.map(() => 0);
    const goal = letters.map(() => 0);
    let anchors: Anchor[] = [];
    let frame = 0;
    let last = 0;
    const mountedAt = performance.now();

    const measure = () => {
      anchors = letters.map(el => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top + rect.height / 2 + window.scrollY
        };
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      let moving = false;

      letters.forEach((el, i) => {
        const half = goal[i] > progress[i] ? RISE : FALL;
        progress[i] += (goal[i] - progress[i]) * (1 - 0.5 ** (dt / half));
        if (Math.abs(goal[i] - progress[i]) < SETTLED) {
          progress[i] = goal[i];
        } else {
          moving = true;
        }
        el.style.fontVariationSettings =
          progress[i] === 0
            ? ""
            : settings({
                wdth: round(lerp(rest.wdth, peak.wdth, progress[i])),
                wght: round(lerp(rest.wght, peak.wght, progress[i]))
              });
      });

      if (moving) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const run = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const release = () => {
      goal.fill(0);
      if (progress.some(p => p !== 0)) run();
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (performance.now() - mountedAt < READY_AFTER_MS) return;
      if ((e.target as Element | null)?.closest("header")) {
        release();
        return;
      }
      const box = container.getBoundingClientRect();
      const near =
        e.clientX > box.left - radius &&
        e.clientX < box.right + radius &&
        e.clientY > box.top - radius &&
        e.clientY < box.bottom + radius;
      if (!near) {
        release();
        return;
      }

      // only measure at rest, otherwise growing letters feed back into the maths
      if (!frame && progress.every(p => p === 0)) measure();
      if (anchors.length === 0) return;

      anchors.forEach((anchor, i) => {
        const distance = Math.hypot(
          e.pageX - anchor.x,
          (e.pageY - anchor.y) * VERTICAL_WEIGHT
        );
        goal[i] = smoothstep(Math.max(0, 1 - distance / radius));
      });
      run();
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", release);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", release);
      cancelAnimationFrame(frame);
      letters.forEach(el => (el.style.fontVariationSettings = ""));
    };
  }, [rest, peak, radius]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        ref={root}
        aria-hidden
        style={{ fontVariationSettings: settings(rest) }}
      >
        {Array.from(text).map((char, i) => (
          <span key={i} data-letter>
            {char}
          </span>
        ))}
      </span>
    </>
  );
};

export default ProximityText;
