export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  if (daysAgo < 0) {
    let lastMonth = currentDate.getMonth() - 1;
    let lastMonthYear = currentDate.getFullYear();

    if (lastMonth < 0) {
      lastMonth = 11; // December is the 11th month
      lastMonthYear--;
    }

    let lastMonthDate = new Date(lastMonthYear, lastMonth, 0);
    let lastMonthDays = lastMonthDate.getDate();

    if (lastMonthDays === 30) {
      // Last month has 30 days
      daysAgo += 30;
    } else if (lastMonthDays === 31) {
      // Last month has 31 days
      daysAgo += 31;
    }
  }

  let formattedDate = "";

  if (daysAgo > 0 && daysAgo <= 31) {
    formattedDate = `${daysAgo}d ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
