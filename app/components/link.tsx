import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = {
  openInNewTab?: boolean;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({
  href,
  children,
  openInNewTab,
  className,
  ...linkProps
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`text-blue-500 no-underline hover:underline ${className}`}
      {...(openInNewTab
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      {...linkProps}
    >
      {children}
      {openInNewTab && <ExternalIcon />}
    </NextLink>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="ml-1 inline-block size-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );
}
