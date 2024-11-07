"use client";

import Highlight, { Prism } from "react-syntax-highlighter";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Roboto_Mono } from "next/font/google";

import { useTheme } from "./ThemeProvider";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

type CodeProps = {
  children: React.ReactNode;
  className: string & `language-${string}`;
  language?: string;
} & SyntaxHighlighterProps;

const RESET_STYLES = {
  background: "transparent",
  backgroundColor: "transparent",
  padding: 0,
};

export default function Code({
  children,
  className,
  language,
  ...props
}: CodeProps) {
  const childrenString = String(children);
  const classNameString = String(className);

  const languageMatch = classNameString.match(/language-(\w+)/);
  const detectedLanguage = languageMatch ? languageMatch[1] : language;

  const { theme, isMounted } = useTheme();
  const isDark = theme === "dark";
  const baseStyle = isDark ? dracula : githubGist;
  const style = enforceFontFamily(baseStyle);
  const SyntaxHighlighter = isDark ? Prism : Highlight;

  console.log("style", style);

  if (detectedLanguage && isMounted) {
    return (
      <SyntaxHighlighter
        language={detectedLanguage}
        style={style}
        PreTag="div"
        customStyle={RESET_STYLES}
        {...props}
      >
        {childrenString}
      </SyntaxHighlighter>
    );
  }

  return (
    <code
      className={`break-words rounded-sm bg-gray-100 p-1 text-sm text-[rgb(215,58,73)] dark:bg-[rgb(23,23,23)] dark:text-[rgb(255,121,198)] ${roboto_mono.className}`}
    >
      <span className="whitespace-pre-wrap">{childrenString}</span>
    </code>
  );
}

function enforceFontFamily(baseStyle: Record<string, React.CSSProperties>) {
  return Object.fromEntries(
    Object.entries(baseStyle).map(([key, value]) => [
      key,
      typeof value === "object"
        ? {
            ...Object.fromEntries(
              Object.entries(value).filter(([k]) => k !== "fontFamily"),
            ),
            fontFamily: `${roboto_mono.style.fontFamily} !important`,
          }
        : value,
    ]),
  );
}
