"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal], [data-reveal-group]";
/** Longest entrance: slow duration plus five stagger steps, with headroom. */
const SETTLE_MS = 1100;

/** Reveals marked elements once as they scroll into view, then removes the markers so
 *  the entrance timing never leaks into later hover or press transitions. */
export function RevealObserver() {
  useEffect(() => {
    const timers: number[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        element.dataset.revealed = "";
        timers.push(window.setTimeout(() => {
          element.removeAttribute("data-reveal");
          element.removeAttribute("data-reveal-group");
          element.removeAttribute("data-revealed");
        }, SETTLE_MS));
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    document.querySelectorAll(SELECTOR).forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}
