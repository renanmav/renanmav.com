"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: "H1" | "H2" | "H3";
};

export default function LateralIndex() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(function findHeadingsAndAttachScrollListener() {
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));
    const headingData = headingElements.map(
      (heading) =>
        ({
          id: heading.id,
          text: heading.textContent,
          level: heading.tagName,
        }) as Heading,
    );
    setHeadings(headingData);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let activeHeading: Element | undefined;
      let closestDistance = Infinity;

      headingElements.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const distance = scrollPosition - (rect.top + window.scrollY);

        if (distance >= 0 && distance < closestDistance) {
          closestDistance = distance;
          activeHeading = heading;
        }
      });

      if (activeHeading) {
        document
          .querySelectorAll(".active")
          .forEach((el) => el.classList.remove("active"));
        document
          .querySelector(`a[href="#${activeHeading.id}"]`)
          ?.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLevelClassName = (level: Heading["level"]) => {
    switch (level) {
      case "H1":
        return "pl-0";
      case "H2":
        return "pl-2";
      case "H3":
        return "pl-4";
    }
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    if (headings[0]?.id === id) {
      // If it's the first heading, scroll to the very top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside className="fixed left-10 top-6">
      <nav className="hidden xl:block">
        <ul className="flex !list-none flex-col gap-1">
          {headings.map((heading) => (
            <li key={heading.id} className={getLevelClassName(heading.level)}>
              <a
                href={`#${heading.id}`}
                onClick={(event) => handleLinkClick(event, heading.id)}
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-200"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
