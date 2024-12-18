"use client";

import useSWR from "swr";
import { formatDate } from "app/formatDate";

export default function Footer() {
  return (
    <footer className="mb-[85vh]">
      <Divider />
      <MadeWith />
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

function getLatestCommitDate(): Promise<string> {
  return fetch(
    "https://api.github.com/repos/renanmav/renanmav.com/commits/main",
  )
    .then((response) => response.json())
    .then((data) => data.commit.author.date);
}

function LastUpdated() {
  const { data, isLoading } = useSWR("lastCommitDate", getLatestCommitDate, {
    fallbackData: new Date().toISOString(),
  });

  return (
    <p id="last-updated" className="text-sm text-gray-300 dark:text-gray-600">
      Last updated on{" "}
      <span className="inline-block">
        {isLoading ? "..." : formatDate(data, { includeRelative: true })}
      </span>
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

function MadeWith() {
  return (
    <p id="made-with" className="text-sm font-semibold text-gray-400">
      Made with 🤘🗿
    </p>
  );
}
