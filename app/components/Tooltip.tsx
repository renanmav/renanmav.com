"use client";

import { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="cursor-help border-b border-dotted border-gray-400"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2">
          <span className="relative z-10 block w-max rounded-lg bg-gray-900 p-2 text-sm text-white shadow-lg dark:bg-gray-700">
            {content}
          </span>
          <span className="absolute left-1/2 top-full -mt-1 size-2 -translate-x-1/2 rotate-45 bg-gray-900 dark:bg-gray-700"></span>
        </span>
      )}
    </span>
  );
}
