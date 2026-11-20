import type { Metadata } from "next";
import { GithubIcon } from "@/components/brand-icons";
import { ProjectFilters } from "@/components/project-filters";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = { title: "Projects", description: "Selected AI, machine-learning, web, mobile, data, and automation projects by Yvan Ramirez.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <><section className="page-hero section-shell"><span className="eyebrow">Projects</span><h1>Work shaped around <em>useful outcomes.</em></h1><p>Start with Hatian, an AI-assisted bill-splitting app, then explore work in research, automation, mobile AI, and game development.</p></section><section className="section-shell section-block"><ProjectFilters /></section><section className="section-shell section-block work-in-progress"><span className="eyebrow">More code</span><h2>Smaller builds and source live on GitHub.</h2><p>The public repositories include Hatian, the Fitness Buddy backend and the Space Invaders game.</p><a className="button button-secondary" href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> Open GitHub</a></section></>;
}
