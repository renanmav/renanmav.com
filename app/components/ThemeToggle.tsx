"use client";

import { LuSunMedium, LuMoonStar } from "react-icons/lu";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="cursor-pointer bg-transparent text-xl transition-transform hover:scale-110"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <LuMoonStar /> : <LuSunMedium />}
    </button>
  );
}
