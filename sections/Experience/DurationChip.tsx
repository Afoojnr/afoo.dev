"use client";

import { useSyncExternalStore } from "react";

import { durationLabel } from "@/lib/duration";

const subscribe = () => () => {};

type DurationChipProps = {
  range: string;
  active: boolean;
};

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
