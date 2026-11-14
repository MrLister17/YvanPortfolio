"use client";

import { Moon, Sun } from "lucide-react";

type ViewTransitionDocument = Document & { startViewTransition?: (update: () => void) => { finished: Promise<void> } };

/** Both icons render; CSS shows the one for the current theme, so there is no hydration flash. */
export function ThemeToggle() {
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const apply = () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch { /* private mode: theme still applies for this visit */ }
    };

    const doc = document as ViewTransitionDocument;
    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    // Origin-aware: the new theme spreads out from the button that was pressed.
    const rect = event.currentTarget.getBoundingClientRect();
    root.style.setProperty("--theme-x", `${rect.left + rect.width / 2}px`);
    root.style.setProperty("--theme-y", `${rect.top + rect.height / 2}px`);
    root.classList.add("theme-switching");
    doc.startViewTransition(apply).finished.finally(() => root.classList.remove("theme-switching"));
  };

  return (
    <button type="button" className="icon-button theme-toggle" onClick={toggle} aria-label="Switch between dark and light theme" title="Switch theme">
      <Sun className="theme-icon-sun" aria-hidden="true" />
      <Moon className="theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
