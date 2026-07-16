"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
  lead = false,
  variant = "card",
  index = 0,
}: {
  project: Project;
  lead?: boolean;
  variant?: "card" | "row";
  index?: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const preview = project.thumbnail ?? project.gallery[0];

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const card = cardRef.current;
    const rect = rectRef.current;
    if (!card || !rect) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--card-x", `${x}px`);
      card.style.setProperty("--card-y", `${y}px`);
      card.style.setProperty("--rotate-x", `${((y / rect.height) - 0.5) * -2.5}deg`);
      card.style.setProperty("--rotate-y", `${((x / rect.width) - 0.5) * 2.5}deg`);
      frameRef.current = null;
    });
  };

  const resetPointer = () => {
    const card = cardRef.current;
    rectRef.current = null;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    card?.style.setProperty("--rotate-x", "0deg");
    card?.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className={`project-card ${lead ? "project-card-lead" : ""} ${variant === "row" ? "project-card-row" : ""}`}
      onPointerEnter={() => { rectRef.current = cardRef.current?.getBoundingClientRect() ?? null; }}
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
    >
      <Link href={`/projects/${project.slug}`} className="project-media" aria-label={`View ${project.title} case study`}>
        {preview ? (
          <Image
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            sizes={variant === "row" ? "(max-width: 900px) 100vw, 58vw" : lead ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 34vw"}
            loading={lead || index === 0 ? "eager" : "lazy"}
          />
        ) : (
          project.visualType === "game" ? (
            <div className="abstract-project-visual game-visual" role="img" aria-label="Abstract Pixel Vanguard arcade game illustration">
              <span>browser game</span><strong>PX</strong><span>playable demo</span>
            </div>
          ) : (
            <div className="abstract-project-visual fitness-visual" role="img" aria-label="Abstract training and guidance system illustration">
              <span>adaptive plan</span><strong>01</strong><span>retrieved context</span>
            </div>
          )
        )}
        <span className="project-open"><ArrowUpRight aria-hidden="true" /></span>
      </Link>
      <div className="project-card-body">
        <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="project-meta"><span>{project.categories.slice(0, 2).join(" · ")}</span><span>{project.status}</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.shortDescription}</p>
        {project.technologies.length > 0 && <div className="tech-list">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>}
        {project.role && <div className="project-role"><small>My role</small><span>{project.role}</span></div>}
        {variant === "row" && <Link className="project-case-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight /></Link>}
      </div>
    </article>
  );
}
