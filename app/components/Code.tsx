"use client";

import Highlight, { Prism } from "react-syntax-highlighter";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from "./ThemeProvider";

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

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const style = isDark ? dracula : githubGist;
  const SyntaxHighlighter = isDark ? Prism : Highlight;

  if (detectedLanguage) {
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
    <code className="break-words rounded-sm bg-gray-100 p-1 text-sm text-[rgb(215,58,73)] dark:bg-[rgb(23,23,23)] dark:text-[rgb(255,121,198)]">
      <span className="whitespace-pre-wrap">{childrenString}</span>
    </code>
  );
}
