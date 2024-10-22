import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { BiLinkExternal } from "react-icons/bi";

type LinkProps = {
  openInNewTab?: boolean;
  showExternalIcon?: boolean;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({
  href,
  children,
  openInNewTab,
  showExternalIcon = true,
  className,
  ...linkProps
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`text-blue-500 no-underline transition-colors duration-500 hover:text-blue-400 dark:hover:text-blue-700 ${className}`}
      {...(openInNewTab
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      {...linkProps}
    >
      {children}
      {openInNewTab && showExternalIcon && <ExternalIcon />}
    </NextLink>
  );
}

function ExternalIcon() {
  return <BiLinkExternal className="ml-0.5 inline-block size-3" />;
}
