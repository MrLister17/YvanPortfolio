import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, ListChecks } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { portfolioConfig } from "@/config/portfolio";
import { experience, leadership } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Yvan Ramirez's experience: Research Analyst in AI Development & Automation at UL Solutions, AI internship, earlier roles, and leadership.",
  alternates: { canonical: "/experience" },
};

const focusAreas = [
  { icon: Bot, title: "AI-assisted research and workbook automation" },
  { icon: ListChecks, title: "Requirements into traceable workflows" },
];

export default function ExperiencePage() {
  const { currentRole } = portfolioConfig;
  const [current, ...earlier] = experience;

  return (
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">Experience / Current role</span>
        <h1>{currentRole.title} at <em>{currentRole.company}.</em></h1>
        <p>I work in {currentRole.team}, building AI-assisted research applications and workflow automation for regulatory research.</p>
      </section>

      <section className="section-shell practicum-facts" data-reveal-group="">
        <div><small>Role</small><strong>{currentRole.title}</strong></div>
        <div><small>Team</small><strong>{currentRole.team}</strong></div>
        <div><small>Company</small><strong>{currentRole.company}</strong></div>
        <div><small>Period</small><strong>{currentRole.period}</strong></div>
      </section>

      <section className="section-shell section-block">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">01 · What I work on</span><h2>Research tools people can check and trust.</h2></div>
          <p>The work covers two builds: the GMA Research Assistant for AI-assisted regulatory research, and GMA DataReady for workbook automation in Microsoft 365.</p>
        </Reveal>
        <div className="feature-grid" data-reveal-group="">
          {current.points.map((point, index) => {
            const Icon = focusAreas[index].icon;
            return <article key={point}><span className="icon-tile"><Icon aria-hidden="true" /></span><h3>{focusAreas[index].title}</h3><p>{point}</p></article>;
          })}
        </div>
        <div className="section-link experience-links">
          <Link className="text-link" href="/projects/gma-research-assistant">GMA Research Assistant <ArrowRight /></Link>
          <Link className="text-link" href="/projects/gma-dataready">GMA DataReady <ArrowRight /></Link>
        </div>
      </section>

      <section className="section-shell section-block evidence-section">
        <Reveal variant="mask"><span className="eyebrow">02 · How I got here</span><h2>Internship, campus roles, and leadership.</h2></Reveal>
        <div className="experience-list" data-reveal-group="">
          {earlier.map((job) => (
            <div className="resume-entry" key={`${job.role}-${job.organization}`}>
              <div><h2>{job.role}</h2><p>{job.organization}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              <span>{job.period}</span>
            </div>
          ))}
          <div className="resume-entry">
            <div><h2>{leadership.role}</h2><p>{leadership.detail}</p></div>
            <span>Leadership</span>
          </div>
        </div>
      </section>

      <section className="section-shell section-block final-cta">
        <span className="eyebrow">Continue</span>
        <h2>See the projects and the full résumé.</h2>
        <div><Link className="button" href="/projects">Explore projects <ArrowRight /></Link><Link className="button button-secondary" href="/resume">View résumé</Link></div>
      </section>
    </>
  );
}
