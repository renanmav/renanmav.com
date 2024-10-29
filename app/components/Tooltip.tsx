"use client";

import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const [horizontalAlign, setHorizontalAlign] = useState<
    "center" | "left" | "right"
  >("center");
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(
    function repositionTooptip() {
      if (isVisible && tooltipRef.current && containerRef.current) {
        const tooltip = tooltipRef.current.getBoundingClientRect();
        const container = containerRef.current.getBoundingClientRect();

        const spaceAbove = container.top;
        const spaceLeft = container.left;
        const spaceRight = window.innerWidth - container.right;

        // Vertical position
        if (spaceAbove < tooltip.height) {
          setPosition("bottom");
        } else {
          setPosition("top");
        }

        // Horizontal alignment
        if (spaceLeft < tooltip.width / 2) {
          setHorizontalAlign("left");
        } else if (spaceRight < tooltip.width / 2) {
          setHorizontalAlign("right");
        } else {
          setHorizontalAlign("center");
        }
      }
    },
    [isVisible],
  );

  const getHorizontalPosition = () => {
    switch (horizontalAlign) {
      case "left":
        return "left-0 translate-x-0";
      case "right":
        return "right-0 translate-x-0";
      default:
        return "left-1/2 -translate-x-1/2";
    }
  };

  const getArrowPosition = () => {
    switch (horizontalAlign) {
      case "left":
        return "left-4";
      case "right":
        return "right-4";
      default:
        return "left-1/2 -translate-x-1/2";
    }
  };

  return (
    <span className="relative inline-block" ref={containerRef}>
      <span
        className="cursor-help border-b border-dotted border-gray-400"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <span
          ref={tooltipRef}
          className={`pointer-events-none absolute ${getHorizontalPosition()} ${
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <span className="relative z-10 block w-max max-w-[min(200px,_calc(100vw_-_2rem))] break-words rounded-lg bg-gray-900 p-2 text-sm text-white shadow-lg dark:bg-gray-700">
            {content}
          </span>
          <span
            className={`absolute ${getArrowPosition()} size-2 rotate-45 bg-gray-900 dark:bg-gray-700 ${
              position === "top" ? "top-full -mt-1" : "bottom-full -mb-1"
            }`}
          />
        </span>
      )}
    </span>
  );
}
