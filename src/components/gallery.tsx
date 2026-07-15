"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motionTokens } from "@/config/motion";
import type { ProjectImage } from "@/types/project";

export function Gallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef("");
  const touchStart = useRef<number | null>(null);
  const isOpen = active !== null;

  const previous = useCallback(() => setActive((value) => value === null ? null : (value - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((value) => value === null ? null : (value + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [document.querySelector("header"), document.querySelector("main"), document.querySelector("footer")]
      .filter(Boolean) as HTMLElement[];
    background.forEach((element) => { element.inert = true; });
    requestAnimationFrame(() => closeButton.current?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Tab") {
        const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? [])
          .filter((element) => element.offsetParent !== null);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow.current;
      background.forEach((element) => { element.inert = false; });
      window.removeEventListener("keydown", onKey);
      opener.current?.focus();
    };
  }, [isOpen, images.length, next, previous]);

  if (!images.length) return null;
  const open = (index: number, element: HTMLElement) => { opener.current = element; setActive(index); };

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <figure key={image.src} className={index === 0 ? "gallery-featured" : ""}>
            <button onClick={(event) => open(index, event.currentTarget)} aria-label={`Open screenshot ${index + 1}: ${image.caption}`}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={index === 0 ? "(max-width: 900px) 100vw, 70vw" : "(max-width: 900px) 100vw, 30vw"} />
              <span><Expand size={18} /> Inspect</span>
            </button>
            <figcaption><small>{String(index + 1).padStart(2, "0")}</small>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      {typeof document !== "undefined" && createPortal(<AnimatePresence>
        {active !== null && (
          <motion.div
            ref={dialogRef}
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot ${active + 1} of ${images.length}`}
            aria-describedby="lightbox-caption"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : motionTokens.duration.fast }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}
          >
            <div className="lightbox-toolbar"><span aria-live="polite">{active + 1} / {images.length}</span><button ref={closeButton} className="icon-button" onClick={() => setActive(null)} aria-label="Close screenshot"><X /></button></div>
            <div
              className="lightbox-image"
              onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                const end = event.changedTouches[0]?.clientX;
                touchStart.current = null;
                if (start === null || end === undefined || Math.abs(end - start) < 48) return;
                if (end < start) next(); else previous();
              }}
            >
              <Image src={images[active].src} alt={images[active].alt} width={images[active].width} height={images[active].height} sizes="95vw" priority />
            </div>
            <p id="lightbox-caption">{images[active].caption}</p>
            {images.length > 1 && <div className="lightbox-controls"><button className="icon-button" onClick={previous} aria-label="Previous screenshot"><ChevronLeft /></button><button className="icon-button" onClick={next} aria-label="Next screenshot"><ChevronRight /></button></div>}
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </>
  );
}
