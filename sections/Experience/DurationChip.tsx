"use client";

import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";

import { roleMonths } from "@/lib/duration";

const subscribe = () => () => {};

type DurationChipProps = {
  start: string;
  end?: string;
  active: boolean;
};

const DurationChip = ({ start, end, active }: DurationChipProps) => {
  const t = useTranslations("common");
  // "now" differs between server and client, so the label only renders on the client
  const total = useSyncExternalStore(
    subscribe,
    () => roleMonths(start, end),
    () => 0
  );
  const years = Math.floor(total / 12);
  const months = total % 12;
  const label = [
    years ? t("years", { count: years }) : "",
    months ? t("months", { count: months }) : ""
  ]
    .filter(Boolean)
    .join(" ");

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
