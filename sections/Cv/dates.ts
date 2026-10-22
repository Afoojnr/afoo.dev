import { getFormatter, getTranslations } from "next-intl/server";

import { monthDate } from "@/lib/duration";

// "2023-07" -> "Jul 2023" (or "2023") in the current language
export const getDateFormat = async () => {
  const format = await getFormatter();
  const t = await getTranslations("common");

  const month = (value: string, yearsOnly = false) =>
    format.dateTime(
      monthDate(value),
      yearsOnly ? { year: "numeric" } : { month: "short", year: "numeric" }
    );

  return {
    month,
    range: (start: string, end?: string, yearsOnly = false) =>
      `${month(start, yearsOnly)} – ${end ? month(end, yearsOnly) : t("present")}`
  };
};
