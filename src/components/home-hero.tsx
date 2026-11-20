import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types/project";
import { portfolioConfig } from "@/config/portfolio";

export function HomeHero({ project }: { project: Project }) {
  return (
    <section className="hero section-shell" aria-labelledby="home-title">
      <div className="hero-copy">
        <div className="hero-overline hero-sequence-1">
          <span>{portfolioConfig.name}</span>
          <span>{portfolioConfig.currentRole.title}, {portfolioConfig.currentRole.company}</span>
        </div>
        <h1 id="home-title" className="hero-sequence-2">
          <span>I build full-stack apps</span>
          <em>with AI.</em>
        </h1>
        <p className="hero-lede hero-sequence-3">
          I&apos;m Yvan, a Research Analyst in AI Development &amp; Automation at UL Solutions. My featured project, Hatian, combines a mobile-first React interface, a PostgreSQL ledger, and AI receipt scanning.
        </p>
        <div className="hero-actions hero-sequence-4">
          <Link className="button" href={`/projects/${project.slug}`}>Read the Hatian case study <ArrowRight /></Link>
          <Link className="button button-secondary" href="/about">About me</Link>
        </div>
        <div className="hero-social hero-sequence-5">
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-sequence-visual"><ProjectCard project={project} /></div>
      <a className="scroll-cue hero-sequence-scroll" href="#selected-work"><ArrowDown /> Scroll to selected work</a>
    </section>
  );
}
