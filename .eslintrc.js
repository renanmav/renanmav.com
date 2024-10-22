/** @type {import("eslint").Linter.LegacyConfig} */
const config = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended"],
  rules: {
    "react/no-unescaped-entities": "off",
  },
};

module.exports = config;
