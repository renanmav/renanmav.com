import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textColor: {
        black: "rgb(20, 20, 20)",
      },
      fontSize: {
        sm: [
          ".8125rem",
          {
            fontWeight: "460",
            letterSpacing: "-.0025rem",
          },
        ],
        base: [
          ".875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
            letterSpacing: "-.00563rem",
          },
        ],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

export default config;
