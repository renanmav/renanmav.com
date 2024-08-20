"use client";

type Props = {
  date: string;
};

export default function DateFromNow({ date: dateStr }: Props) {
  const date = new Date(dateStr);
  const now = new Date(Date.now());

  const { years, months } = dateDiffInYearsAndMonths(date, now);

  const yearLabel = years > 1 ? "years" : "year";
  const monthLabel = months > 1 ? "months" : "month";

  return <span>{`${years} ${yearLabel} and ${months} ${monthLabel}`}</span>;
}

function dateDiffInYearsAndMonths(startDate: Date, endDate: Date) {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}
