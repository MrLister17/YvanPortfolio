import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import type { Project } from "@/types/project";

export function ProjectCard({ project, variant = "card", index = 0 }: { project: Project; variant?: "card" | "row"; index?: number }) {
  // Cards lead with the project icon; a screenshot is only used when a thumbnail is set on purpose.
  const preview = project.thumbnail;

  return (
    <article className={`project-card ${variant === "row" ? "project-card-row" : ""}`} data-tilt="">
      <div className="project-media">
        {preview ? (
          <Image src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} sizes="(max-width: 1050px) 100vw, 58vw" loading={index === 0 ? "eager" : "lazy"} />
        ) : (
          <div className="project-icon-stage"><ProjectIcon project={project} size={176} priority={index === 0} /></div>
        )}
      </div>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.categories.slice(0, 2).join(" · ")}</span><span className="status-pill">{project.status}</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{variant === "row" ? project.shortDescription : project.positioningStatement}</p>
        {project.highlights && <ul className="highlight-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
        {variant === "row" && project.technologies.length > 0 && <div className="tech-list">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>}
        {variant === "row" && project.role && <div className="project-role"><small>My role</small><span>{project.role}</span></div>}
        <span className="project-case-link" aria-hidden="true">View case study <ArrowUpRight /></span>
      </div>
    </article>
  );
}
