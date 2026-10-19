const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];

/** "May 2024" becomes a month index, counted from year 0. */
const parseMonth = (text: string) => {
  const match = text.trim().match(/^([A-Za-z]{3})\w*\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS.indexOf(match[1].toLowerCase());
  return month < 0 ? null : Number(match[2]) * 12 + month;
};

/**
 * Turns a date range like "Jul 2023 – Aug 2024" into a plain duration such
 * as "1 yr 2 mos", counting both end months the way a CV or LinkedIn does.
 * "Present" runs to the current month.
 * @param range - dates written as "Mon YYYY - Mon YYYY" or "... - Present"
 * @param now - the reference date for "Present"
 * @returns the duration, or an empty string when the range can't be read
 */
export const durationLabel = (range: string, now = new Date()) => {
  const [startText, endText = ""] = range.split(/\s+[-–—]\s+/);
  const start = parseMonth(startText);
  const end = /present/i.test(endText)
    ? now.getFullYear() * 12 + now.getMonth()
    : parseMonth(endText);

  if (start === null || end === null || end < start) return "";

  const months = end - start + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;

  return [
    years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "",
    rest ? `${rest} ${rest === 1 ? "mo" : "mos"}` : ""
  ]
    .filter(Boolean)
    .join(" ");
};
