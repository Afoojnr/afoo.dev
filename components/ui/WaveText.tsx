"use client";

import { useEffect, useRef } from "react";

type WaveTextProps = {
  text: string;
  radius?: number;
  push?: number;
};

type Anchor = { x: number; y: number };

const READY_AFTER_MS = 1400;
// half-lives in seconds
const RISE = 0.1;
const FALL = 0.22;
const SETTLED = 0.004;
const LIFT = 3;
const STRETCH = 0.2;

const smoothstep = (t: number) => t * t * (3 - 2 * t);
const round = (n: number) => Math.round(n * 100) / 100;

const WaveText = ({ text, radius = 130, push = 7 }: WaveTextProps) => {
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
    const dirX = letters.map(() => 0);
    const dirY = letters.map(() => 0);
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
        const s = progress[i];
        if (s === 0) {
          el.style.transform = "";
          el.style.color = "";
          return;
        }
        el.style.transform = `translate(${round(dirX[i] * s * push)}px, ${round(
          dirY[i] * s * push - s * LIFT
        )}px) scaleY(${round(1 + s * STRETCH)})`;
        el.style.color = `color-mix(in srgb, var(--ink) ${Math.round(
          s * 100
        )}%, var(--ink-soft))`;
      });

      frame = moving ? requestAnimationFrame(tick) : 0;
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

      // only measure at rest, otherwise moved letters feed back into the maths
      if (!frame && progress.every(p => p === 0)) measure();
      if (anchors.length === 0) return;

      anchors.forEach((anchor, i) => {
        const dx = anchor.x - e.pageX;
        const dy = anchor.y - e.pageY;
        const distance = Math.hypot(dx, dy);
        goal[i] = smoothstep(Math.max(0, 1 - distance / radius));
        dirX[i] = distance > 0 ? dx / distance : 0;
        dirY[i] = distance > 0 ? dy / distance : 0;
      });
      run();
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", release);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", release);
      cancelAnimationFrame(frame);
      letters.forEach(el => {
        el.style.transform = "";
        el.style.color = "";
      });
    };
  }, [radius, push]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={root} aria-hidden>
        {text.split(" ").map((word, w, words) => (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, i) => (
                <span key={i} data-letter className="inline-block">
                  {char}
                </span>
              ))}
            </span>
            {w < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </>
  );
};

export default WaveText;
