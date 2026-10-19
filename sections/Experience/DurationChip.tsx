"use client";

import { useSyncExternalStore } from "react";

import { durationLabel } from "@/lib/duration";

const subscribe = () => () => {};

type DurationChipProps = {
  range: string;
  /** Shown while the role has the focus; hover also reveals it. */
  active: boolean;
};

/**
 * A small chip with how long the role lasted, worked out from its dates. It
 * appears while the role has the focus or is hovered, so touch visitors see
 * it as they scroll. "Present" runs to today, which only the browser knows,
 * so the chip is empty on the server and fills in after hydration.
 * @param range - the role's dates
 * @param active - whether the role currently has the focus
 * @returns the chip, or nothing until the browser can compute it
 */
const DurationChip = ({ range, active }: DurationChipProps) => {
  const label = useSyncExternalStore(
    subscribe,
    () => durationLabel(range),
    () => ""
  );
  if (!label) return null;

  return (
    <span
      className={`border-line text-ink ease-out-expo rounded-full border px-2.5 py-0.5 transition-[opacity,translate] duration-300 motion-reduce:translate-x-0 motion-reduce:transition-none ${
        active
          ? "translate-x-0 opacity-100"
          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      }`}
    >
      {label}
    </span>
  );
};

export default DurationChip;
