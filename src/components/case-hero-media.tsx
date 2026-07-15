import Image from "next/image";
import type { Project } from "@/types/project";

export function CaseHeroMedia({ project, index }: { project: Project; index: number }) {
  const image = project.gallery[0];

  return (
    <section className="case-hero-media section-shell" aria-label={`${project.title} visual preview`}>
      <span className="case-media-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      {image ? (
        <figure className="case-hero-frame">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 900px) 100vw, 92vw" priority />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ) : (
        <div className="case-hero-frame case-abstract-cover" role="img" aria-label="Abstract Fitness Buddy project cover, not an application screenshot">
          <div className="fitness-pulse" aria-hidden="true"><span /><span /><span /></div>
          <div><small>Academic project overview</small><strong>FITNESS<br />BUDDY</strong><p>Adaptive training · progress · AI-supported guidance</p></div>
          <span className="abstract-label">Abstract cover / no approved screenshots</span>
        </div>
      )}
    </section>
  );
}
