import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
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
  const preview = project.thumbnail ?? project.gallery[0];

  return (
    <article className={`project-card ${lead ? "project-card-lead" : ""} ${variant === "row" ? "project-card-row" : ""}`}>
      <div className="project-media">
        {preview ? (
          <Image
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            sizes={variant === "row" ? "(max-width: 1050px) 100vw, 58vw" : lead ? "(max-width: 1050px) 100vw, 60vw" : "(max-width: 1050px) 100vw, 40vw"}
            loading={lead || index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <div className="project-icon-stage"><ProjectIcon project={project} size={176} /></div>
        )}
      </div>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.categories.slice(0, 2).join(" · ")}</span><span className="status-pill">{project.status}</span></div>
        <div className="project-title">
          {preview && <ProjectIcon project={project} size={48} decorative />}
          <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        </div>
        <p>{project.shortDescription}</p>
        {project.technologies.length > 0 && <div className="tech-list">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>}
        {project.role && <div className="project-role"><small>My role</small><span>{project.role}</span></div>}
        <span className="project-case-link" aria-hidden="true">View case study <ArrowUpRight /></span>
      </div>
    </article>
  );
}
