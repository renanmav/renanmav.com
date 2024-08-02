import NextLink, { LinkProps } from "next/link";

export default function Link({
  href,
  children,
  ...linkProps
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  // TODO: add openInNewTab prop
  return (
    <NextLink
      href={href}
      {...linkProps}
      className="text-blue-500 no-underline hover:underline"
    >
      {children}
    </NextLink>
  );
}
