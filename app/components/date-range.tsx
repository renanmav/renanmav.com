"use client";

type Props = {
  startDate: string;
  endDate: string;
};

// TODO: refactor to DateRange component
export default function DateRange({ startDate, endDate }: Props) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const { years, months } = dateDiffInYearsAndMonths(start, end);

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
