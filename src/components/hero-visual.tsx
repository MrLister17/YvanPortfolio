"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const signals = [
  { label: "AI workflows", className: "signal-a" },
  { label: "Human review", className: "signal-b" },
  { label: "Structured data", className: "signal-c" },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  const updatePointer = (clientX: number, clientY: number) => {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const element = ref.current;
    const rect = rectRef.current;
    if (!element || !rect) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--pointer-x", `${clientX - rect.left}px`);
      element.style.setProperty("--pointer-y", `${clientY - rect.top}px`);
      element.style.setProperty("--depth-x", `${x * 10}px`);
      element.style.setProperty("--depth-y", `${y * 8}px`);
      frameRef.current = null;
    });
  };

  return (
    <div
      ref={ref}
      className="hero-system"
      onPointerEnter={() => { rectRef.current = ref.current?.getBoundingClientRect() ?? null; }}
      onPointerMove={(event) => updatePointer(event.clientX, event.clientY)}
      onPointerLeave={() => {
        rectRef.current = null;
        if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
        ref.current?.style.setProperty("--depth-x", "0px");
        ref.current?.style.setProperty("--depth-y", "0px");
      }}
      aria-label="Layered previews of the GMA Research Assistant showing source-backed research and human review"
    >
      <div className="system-grid" aria-hidden="true" />
      <div className="hero-monogram" aria-hidden="true"><span>LYR</span><small>APPLIED / AI</small></div>
      <figure className="hero-screen hero-screen-primary">
        <Image
          src="/images/projects/gma/regulatory-search.png"
          alt="GMA Research Assistant source-backed regulatory search interface"
          width={1440}
          height={900}
          sizes="(max-width: 1050px) 80vw, 44vw"
          priority
        />
        <figcaption>Source-backed research</figcaption>
      </figure>
      <figure className="hero-screen hero-screen-secondary">
        <Image
          src="/images/projects/gma/review-queue.png"
          alt="GMA Research Assistant human review queue"
          width={1440}
          height={900}
          sizes="(max-width: 1050px) 58vw, 29vw"
          loading="lazy"
        />
        <figcaption>Human approval gate</figcaption>
      </figure>
      {signals.map((signal) => <span key={signal.label} className={`system-signal ${signal.className}`}>{signal.label}</span>)}
      <div className="system-status"><span className="status-dot" /> Evidence before output</div>
    </div>
  );
}
