import type { Metadata } from "next";
import { GithubIcon } from "@/components/brand-icons";
import { ProjectFilters } from "@/components/project-filters";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = { title: "Projects", description: "Selected AI, machine-learning, web, mobile, data, and automation projects by Yvan Ramirez.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <><section className="page-hero section-shell"><span className="eyebrow">Projects</span><h1>Work shaped around <em>useful outcomes.</em></h1><p>Four case studies: AI-assisted research, workbook automation, a mobile AI coach, and a browser game.</p></section><section className="section-shell section-block"><ProjectFilters /></section><section className="section-shell section-block work-in-progress"><span className="eyebrow">More code</span><h2>Smaller builds and source live on GitHub.</h2><p>The public repositories include the Fitness Buddy backend and the Space Invaders game.</p><a className="button button-secondary" href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> Open GitHub</a></section></>;
}
