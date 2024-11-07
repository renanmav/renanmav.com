import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { myInfo, BASE_URL } from "./constants";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: myInfo.name,
    template: "%s",
  },
  description: myInfo.description,
  openGraph: {
    title: myInfo.name,
    siteName: myInfo.name,
    description: myInfo.description,
    url: BASE_URL,
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    images: [
      {
        url: new URL("/images/unfurl.png", BASE_URL).href,
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
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        inter.className,
      )}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
