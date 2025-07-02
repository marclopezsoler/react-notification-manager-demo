import { useState, useEffect } from "react";

const THEME_KEY = "notiflow-theme";

const useTheme = () => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(THEME_KEY, mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { mode, toggleMode };
};

export default useTheme;
