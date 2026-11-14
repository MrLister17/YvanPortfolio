import Image from "next/image";
import { ProjectIcon } from "@/components/project-icon";
import type { Project } from "@/types/project";

export function CaseHeroMedia({ project }: { project: Project }) {
  const image = project.gallery[0];

  return (
    <section className="case-hero-media section-shell" aria-label={`${project.title} visual preview`}>
      {image ? (
        <figure className="case-hero-frame">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 900px) 100vw, 92vw" priority />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ) : (
        <div className="case-hero-frame case-abstract-cover">
          <ProjectIcon project={project} size={220} priority />
          <div>
            <small>{project.visualType === "game" ? "Browser game · playable below" : "Project overview · screenshots not yet published"}</small>
            <strong>{project.title}</strong>
            <div className="tech-list">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
          </div>
        </div>
      )}
    </section>
  );
}
