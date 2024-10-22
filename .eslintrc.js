/** @type {import("eslint").Linter.LegacyConfig} */
const config = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended"],
  plugins: ["filenames"],
  rules: {
    "react/no-unescaped-entities": "off",
  },
  overrides: [
    {
      files: ["app/components/**/*.tsx"],
      rules: {
        "filenames/match-exported": "error",
        "filenames/no-index": "error",
        "filenames/match-regex": ["error", "^[A-Z][a-zA-Z0-9]*\\.tsx$", true],
      },
    },
  ],
};

module.exports = config;
