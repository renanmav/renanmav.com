import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
};

export default config;
