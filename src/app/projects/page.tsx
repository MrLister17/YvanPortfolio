import type { Metadata } from "next";
import { ProjectFilters } from "@/components/project-filters";

export const metadata: Metadata = { title: "Projects", description: "Selected AI, machine-learning, web, mobile, data, and automation projects by Yvan Ramirez.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <><section className="page-hero section-shell"><span className="eyebrow">Projects</span><h1>Work shaped around <em>useful outcomes.</em></h1><p>Case studies spanning AI-assisted research, review-centered product design, mobile applications, structured data, and full-stack development.</p></section><section className="section-shell section-block"><ProjectFilters /></section><section className="section-shell section-block work-in-progress"><span className="eyebrow">Additional work</span><h2>A focused collection, intentionally.</h2><p>New work will be added when its source, contribution, and public assets are verified. Quality and clarity matter more than filling a grid.</p></section></>;
}
