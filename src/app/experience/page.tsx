import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileSpreadsheet, Layers, Route, ShieldCheck, TestTubeDiagonal } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { portfolioConfig } from "@/config/portfolio";
import { experience, leadership } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Yvan Ramirez's experience: AI Intern with the GMA Research Team at UL Solutions, plus earlier roles and leadership.",
  alternates: { canonical: "/experience" },
};

const focusAreas = [
  { icon: Route, title: "Requirements from real research work" },
  { icon: Layers, title: "Full-stack build" },
  { icon: FileSpreadsheet, title: "Workbook automation and traceability" },
  { icon: TestTubeDiagonal, title: "Testing and governance" },
];

export default function ExperiencePage() {
  const { currentRole, practicum } = portfolioConfig;
  const [current, ...earlier] = experience;

  return (
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">Experience / Current role</span>
        <h1>{currentRole.title} at <em>{currentRole.company}.</em></h1>
        <p>Since June 2026 I have worked with the {currentRole.team}, turning regulatory research workflows into evidence-grounded web tools.</p>
      </section>

      <section className="section-shell practicum-facts" data-reveal-group="">
        <div><small>Role</small><strong>{currentRole.title}</strong></div>
        <div><small>Team</small><strong>{currentRole.team}</strong></div>
        <div><small>Period</small><strong>{currentRole.period}</strong></div>
        <div><small>Setup</small><strong>{practicum.setup}</strong></div>
      </section>

      <section className="section-shell section-block">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">01 · What I work on</span><h2>From a researcher&apos;s spreadsheet to a reviewed answer.</h2></div>
          <p>The work centres on the GMA Research Assistant, a working demonstration for approved knowledge discovery, AI-assisted research, human review, and Excel-ready outputs.</p>
        </Reveal>
        <div className="feature-grid" data-reveal-group="">
          {current.points.map((point, index) => {
            const Icon = focusAreas[index].icon;
            return <article key={point}><span className="icon-tile"><Icon aria-hidden="true" /></span><h3>{focusAreas[index].title}</h3><p>{point}</p></article>;
          })}
        </div>
        <div className="section-link"><Link className="text-link" href="/projects/gma-research-assistant">Read the GMA Research Assistant case study <ArrowRight /></Link></div>
      </section>

      <section className="section-shell section-block evidence-section">
        <Reveal variant="mask"><span className="eyebrow">02 · Earlier roles and leadership</span><h2>Where the working habits came from.</h2></Reveal>
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

      <aside className="section-shell records-note">
        <span className="icon-tile"><ShieldCheck aria-hidden="true" /></span>
        <div>
          <span className="eyebrow">Academic practicum record</span>
          <p>{practicum.totalHours} required hours at {practicum.company}, {practicum.startDate} to {practicum.endDate}, {practicum.setup.toLowerCase()}. Internal systems, customer information, and proprietary materials are not shown on this site.</p>
          <a className="text-link" href="/documents/practicum-narrative-report.pdf" target="_blank" rel="noreferrer">View narrative report <ExternalLink /></a>
        </div>
      </aside>

      <section className="section-shell section-block final-cta">
        <span className="eyebrow">Continue</span>
        <h2>See the projects and the full résumé.</h2>
        <div><Link className="button" href="/projects">Explore projects <ArrowRight /></Link><Link className="button button-secondary" href="/resume">View résumé</Link></div>
      </section>
    </>
  );
}
