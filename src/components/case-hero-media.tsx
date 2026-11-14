import Image from "next/image";
import { ProjectIcon } from "@/components/project-icon";
import type { Project } from "@/types/project";

export function CaseHeroMedia({ project }: { project: Project }) {
  const image = project.thumbnail;

  return (
    <section className="case-hero-media section-shell" aria-label={`${project.title} at a glance`}>
      {image ? (
        <figure className="case-hero-frame">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 900px) 100vw, 92vw" priority />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ) : (
        <div className="case-hero-frame case-abstract-cover">
          <ProjectIcon project={project} size={220} priority />
          <div>
            <small>{project.categories.slice(0, 3).join(" · ")}</small>
            <strong>{project.shortDescription}</strong>
            {project.highlights && <ul className="highlight-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
        </div>
      )}
    </section>
  );
}
