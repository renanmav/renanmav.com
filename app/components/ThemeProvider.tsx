"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isMounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(function onMount() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const systemPreferenceTheme = mediaQuery.matches ? "dark" : "light";
      setTheme(systemPreferenceTheme);
    }

    setMounted(true);

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(
    function onThemeUpdate() {
      if (!mounted) return;

      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isMounted: mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
