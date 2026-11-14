import Image from "next/image";
import type { Project } from "@/types/project";

/** Frames any project artwork as a rounded app-icon tile so mixed sources read as one set. */
export function ProjectIcon({ project, size = 48, decorative = false, priority = false }: { project: Pick<Project, "icon">; size?: number; decorative?: boolean; priority?: boolean }) {
  return (
    <span className="project-icon">
      <Image
        src={project.icon.src}
        alt={decorative ? "" : project.icon.alt}
        width={size}
        height={size}
        sizes={`${size}px`}
        unoptimized={project.icon.src.endsWith(".svg")}
        priority={priority}
      />
    </span>
  );
}
