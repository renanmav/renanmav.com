import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import YoutubeVideo from "./youtube-video";

// TODO: use https://github.com/react-syntax-highlighter/react-syntax-highlighter

import Link from "./link";
import DateRange from "./date-range";
import LateralIndex from "./lateral-index";

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

function Code({ children, ...props }) {
  return (
    <code
      className="rounded-sm bg-gray-100 p-1 text-sm dark:bg-[rgb(23,23,23)] dark:text-white"
      {...props}
    >
      {children}
    </code>
  );
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
};

export function CustomMDX(props) {
  return (
    <>
      <LateralIndex />

      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </>
  );
}
