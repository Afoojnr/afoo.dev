// "2023-07" -> months since year 0, so ranges can be subtracted
const toMonths = (month: string) => {
  const [year, index] = month.split("-").map(Number);
  return year * 12 + index - 1;
};

// "2023-07" to "2024-08" -> 14 (both months counted); no end runs to today
export const roleMonths = (start: string, end?: string, now = new Date()) => {
  const last = end ? toMonths(end) : now.getFullYear() * 12 + now.getMonth();
  return Math.max(0, last - toMonths(start) + 1);
};

// mid-month in UTC, so no time zone can push it into the next or previous month
export const monthDate = (month: string) => {
  const [year, index] = month.split("-").map(Number);
  return new Date(Date.UTC(year, index - 1, 15));
};
