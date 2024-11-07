import React from "react";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

import Alert from "./Alert";
import Link from "./Link";
import Code from "./Code";
import DateRange from "./DateRange";
import YoutubeVideo from "./YoutubeVideo";
import LateralIndex from "./LateralIndex";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <Link {...props} />;
  }

  return <Link openInNewTab {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className: "!text-base !font-semibold !mb-4 !pt-10 !mt-0" },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function withLinkifyText(Element: React.ElementType) {
  return function LinkifiedTextComponent({ children, ...props }) {
    if (typeof children === "string") {
      const urlRegex = /(https?:\/\/[^\s]+)/gi;
      const parts = children.split(urlRegex);

      return (
        <Element {...props}>
          {parts.map((part, index) => {
            if (part.match(urlRegex)) {
              return (
                <Link key={index} href={part} openInNewTab>
                  {part}
                </Link>
              );
            }
            return part;
          })}
        </Element>
      );
    }

    return <Element {...props}>{children}</Element>;
  };
}

const CustomParagraph = withLinkifyText("p");
const CustomListItem = withLinkifyText("li");

function Quote({ children }) {
  return (
    <blockquote className="mx-0 border-l-4 border-neutral-300 pl-4 dark:border-neutral-700">
      {children}
    </blockquote>
  );
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  DateRange,
  YoutubeVideo,
  p: CustomParagraph,
  li: CustomListItem,
  blockquote: Quote,
  Alert,
};

interface CustomMDXProps extends MDXRemoteProps {
  showLateralIndex?: string;
}

export default function CustomMDX({
  showLateralIndex = "true",
  ...props
}: CustomMDXProps) {
  return (
    <>
      {showLateralIndex === "true" ? <LateralIndex /> : null}

      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </>
  );
}
