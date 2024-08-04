import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { myInfo } from "./constants";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: myInfo.name,
    template: "%s",
  },
  description: "This is my website.",
  openGraph: {
    title: "My Website",
    description: "This is my website.",
    url: baseUrl,
    siteName: "My Website",
    locale: "en_US",
    type: "website",
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
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        inter.className,
      )}
    >
      <body className="mx-auto mt-8 max-w-2xl px-4 antialiased">
        {/* TODO: change this to habbo icon rounded */}
        <link rel="shortcut icon" href="/habbo-pfp.png" />
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
