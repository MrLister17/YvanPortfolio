"use client";

import { useEffect } from "react";

/** Everything that should answer a click or tap with visible feedback. */
const PRESSABLE = [
  ".button", ".icon-button", ".command-trigger", ".filter-tabs button", ".project-card", ".architecture-step button",
  ".rag-steps button", ".back-to-top", ".text-link", ".desktop-nav a", ".mobile-nav a", ".wordmark", "summary",
  ".stack-dot", ".stack-plate", ".gallery-grid button", ".footer-links a", ".hero-social a", ".home-contact-actions a",
  ".contact-panel a", ".project-pagination a", ".command-results button", ".command-footer button", ".back-link", ".scroll-cue",
].join(", ");
const BIG = ".button:not(.button-secondary), .project-card, .stack-plate";
const TILT = "[data-tilt], [data-tilt-source]";
const MIN_PRESS_MS = 170;

function setTilt(element: HTMLElement, clientX: number, clientY: number) {
  const rect = element.getBoundingClientRect();
  const x = (clientX - rect.left) / rect.width - 0.5;
  const y = (clientY - rect.top) / rect.height - 0.5;
  element.style.setProperty("--ry", `${(x * 11).toFixed(2)}deg`);
  element.style.setProperty("--rx", `${(-y * 11).toFixed(2)}deg`);
  element.style.setProperty("--px", (x * 2).toFixed(3));
  element.style.setProperty("--py", (y * 2).toFixed(3));
  element.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
  element.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
}

function clearTilt(element: HTMLElement | null) {
  if (!element) return;
  for (const name of ["--rx", "--ry", "--px", "--py", "--gx", "--gy"]) element.style.removeProperty(name);
}

/**
 * Site-wide press feedback: a held "pressed" state that survives quick taps, a spark at the
 * exact point of contact, a light haptic tick on phones, and 3D tilt that follows the pointer
 * (or leans toward the finger on touch). Motion is skipped for reduced-motion visitors.
 */
export function Feedback() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const layer = document.createElement("div");
    layer.className = "fx-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    let hovered: HTMLElement | null = null;
    let frame: number | null = null;

    const spark = (x: number, y: number, big: boolean) => {
      const node = document.createElement("div");
      node.className = `fx-spark${big ? " fx-spark-big" : ""}`;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      const count = big ? 12 : 7;
      let html = '<i class="fx-ring"></i>';
      for (let index = 0; index < count; index += 1) {
        const angle = (360 / count) * index + Math.random() * 24;
        const distance = (big ? 46 : 28) + Math.random() * (big ? 34 : 16);
        html += `<i class="fx-dot" style="--a:${angle.toFixed(0)}deg;--d:${distance.toFixed(0)}px"></i>`;
      }
      node.innerHTML = html;
      layer.appendChild(node);
      window.setTimeout(() => node.remove(), 750);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const origin = event.target instanceof Element ? event.target : null;
      const target = origin?.closest<HTMLElement>(PRESSABLE);
      if (!target) return;

      const startedAt = performance.now();
      const touch = event.pointerType !== "mouse";
      const tilted = touch && !reduce.matches ? target.closest<HTMLElement>(TILT) : null;
      target.classList.remove("did-press");
      target.classList.add("is-pressed");

      if (!reduce.matches) {
        const big = target.matches(BIG);
        spark(event.clientX, event.clientY, big);
        if (touch) {
          try { navigator.vibrate?.(big ? 14 : 8); } catch { /* haptics are optional */ }
        }
        if (tilted) setTilt(tilted, event.clientX, event.clientY);
      }

      const release = () => {
        window.removeEventListener("pointerup", release);
        window.removeEventListener("pointercancel", release);
        window.setTimeout(() => {
          target.classList.remove("is-pressed");
          target.classList.add("did-press");
          clearTilt(tilted);
          window.setTimeout(() => target.classList.remove("did-press"), 700);
        }, Math.max(0, MIN_PRESS_MS - (performance.now() - startedAt)));
      };
      window.addEventListener("pointerup", release);
      window.addEventListener("pointercancel", release);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reduce.matches) return;
      const origin = event.target instanceof Element ? event.target : null;
      const element = origin?.closest<HTMLElement>(TILT) ?? null;
      if (element !== hovered) {
        clearTilt(hovered);
        hovered = element;
      }
      if (!element) return;
      const { clientX, clientY } = event;
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setTilt(element, clientX, clientY);
        frame = null;
      });
    };

    const onLeave = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      clearTilt(hovered);
      hovered = null;
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
      layer.remove();
    };
  }, []);

  return null;
}
