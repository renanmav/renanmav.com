"use client";

interface HighlightProps {
  children: React.ReactNode;
  color?: "yellow" | "green" | "blue" | "pink";
}

export default function Highlight({
  children,
  color = "yellow",
}: HighlightProps) {
  const colorStyles = {
    yellow: "bg-yellow-200 dark:bg-yellow-900/50",
    green: "bg-green-200 dark:bg-green-900/50",
    blue: "bg-blue-200 dark:bg-blue-900/50",
    pink: "bg-pink-200 dark:bg-pink-900/50",
  };

  return (
    <span className={` ${colorStyles[color]} transition-colors duration-200`}>
      {children}
    </span>
  );
}
