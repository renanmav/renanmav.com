import { formatDate } from "app/blog/utils";

export default function Footer() {
  return (
    <footer className="mb-20">
      <Divider />
      <Memories />
      <LastUpdated />
    </footer>
  );
}

function Divider() {
  return (
    <div
      id="divider"
      className="my-8 w-12 border-b border-neutral-300 dark:border-neutral-800"
    />
  );
}

async function getLatestCommitDate(): Promise<string> {
  "use client";
  const response = await fetch(
    "https://api.github.com/repos/renanmav/renanmav.com/commits/main",
  );
  const data = await response.json();
  return data.commit.author.date;
}

async function LastUpdated() {
  const lastCommitDate = await getLatestCommitDate();

  return (
    <p id="last-updated" className="text-sm text-gray-300 dark:text-gray-600">
      Last updated on {formatDate(lastCommitDate, true)}
    </p>
  );
}

function Memories() {
  return (
    <p id="memories" className="text-sm text-gray-400">
      Recording memories while time goes by...
    </p>
  );
}
