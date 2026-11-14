"use client";

import { Moon, Sun } from "lucide-react";

/** Both icons render; CSS shows the one for the current theme, so there is no hydration flash. */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* private mode: theme still applies for this visit */ }
  };

  return (
    <button type="button" className="icon-button theme-toggle" onClick={toggle} aria-label="Switch between dark and light theme" title="Switch theme">
      <Sun className="theme-icon-sun" aria-hidden="true" />
      <Moon className="theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
