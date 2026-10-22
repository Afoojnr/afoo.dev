import { useFormatter, useTranslations } from "next-intl";

import { monthDate } from "@/lib/duration";

// ("2023-07", "2024-08") -> "Jul 2023 – Aug 2024"; no end reads as "Present"
export const useDateRange = () => {
  const format = useFormatter();
  const t = useTranslations("common");
  const month = (value: string) =>
    format.dateTime(monthDate(value), { month: "short", year: "numeric" });

  return (start: string, end?: string) =>
    `${month(start)} – ${end ? month(end) : t("present")}`;
};
