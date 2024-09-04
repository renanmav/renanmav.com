import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { baseUrl } from "./sitemap";
import { myInfo } from "./constants";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: myInfo.name,
    template: "%s",
  },
  description: myInfo.description,
  openGraph: {
    title: myInfo.name,
    siteName: myInfo.name,
    description: myInfo.description,
    url: baseUrl,
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    images: [
      {
        url: new URL("/unfurl.png", baseUrl).href,
        width: 800,
        height: 600,
        alt: myInfo.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        inter.className,
      )}
    >
      <body className="antialiased">
        <link rel="shortcut icon" href="/favicon.png" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
