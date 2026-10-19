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

const parseMonth = (text: string) => {
  const match = text.trim().match(/^([A-Za-z]{3})\w*\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS.indexOf(match[1].toLowerCase());
  return month < 0 ? null : Number(match[2]) * 12 + month;
};

// "Jul 2023 - Aug 2024" -> "1 yr 2 mos" (both months counted)
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
