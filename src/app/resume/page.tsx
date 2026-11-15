import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { portfolioConfig } from "@/config/portfolio";
import { certificationNames, experience, leadership, profile, skillGroups } from "@/content/experience";
import { projects } from "@/content/projects";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé for Lester Yvan P. Ramirez, Research Analyst in AI Development & Automation: experience, projects, skills, education, certifications, and contact links.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero resume-hero section-shell">
        <span className="eyebrow">Résumé</span>
        <h1>{portfolioConfig.name}</h1>
        <p>Applied AI · Research Automation · Full-Stack Development</p>
        <div className={styles.actions}>
          <a className="button" href={portfolioConfig.resumeUrl} target="_blank" rel="noreferrer">Preview PDF <ExternalLink /></a>
          <a className="button button-secondary" href={portfolioConfig.resumeUrl} download="Lester-Yvan-Ramirez-Resume.pdf">Download PDF <Download /></a>
        </div>
        <div className="resume-links">
          <a href={`mailto:${portfolioConfig.email}`}><Mail /> Email</a>
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
        </div>
      </section>

      <div className="section-shell resume-layout">
        <aside>
          <span className="eyebrow">Profile</span>
          <p>{profile}</p>
          <span className="eyebrow">Certifications & training</span>
          <ul>{certificationNames.map((item) => <li key={item}>{item}</li>)}</ul>
          <span className="eyebrow">Direction</span>
          <ul>{portfolioConfig.careerDirections.map((direction) => <li key={direction}>{direction}</li>)}</ul>
        </aside>

        <div className="resume-main">
          <section>
            <span className="eyebrow">Experience</span>
            {experience.map((job) => (
              <div className="resume-entry" key={`${job.role}-${job.organization}`}>
                <div>
                  <h2>{job.role}</h2>
                  <p>{job.organization}</p>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
                <span>{job.period}</span>
              </div>
            ))}
          </section>

          <section>
            <span className="eyebrow">Education</span>
            <div className="resume-entry">
              <div>
                <h2>{portfolioConfig.program}</h2>
                <p>{portfolioConfig.school}</p>
                <small>{portfolioConfig.specialization} specialization · Dean&apos;s Lister</small>
              </div>
              <span>Aug 2022 – Jul 2026<br />Graduated</span>
            </div>
          </section>

          <section>
            <span className="eyebrow">Selected projects</span>
            {projects.map((project) => (
              <div className="resume-entry" key={project.slug}>
                <div>
                  <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
                  <p>{project.shortDescription}</p>
                  {project.technologies.length > 0 && <small>{project.technologies.slice(0, 8).join(" · ")}</small>}
                </div>
                <span>{project.status}{project.role && <><br />{project.role}</>}</span>
              </div>
            ))}
          </section>

          <section>
            <span className="eyebrow">Technical skills</span>
            {skillGroups.map((group) => (
              <div className="resume-entry" key={group.title}>
                <div><h2>{group.title}</h2><p>{group.items.join(", ")}</p></div>
              </div>
            ))}
          </section>

          <section>
            <span className="eyebrow">Leadership</span>
            <div className="resume-entry">
              <div>
                <h2>{leadership.role}</h2>
                <p>{leadership.detail}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="section-shell section-block resume-note">
        <span className="eyebrow">PDF résumé</span>
        <h2>The complete résumé is ready to view or save.</h2>
        <p>Use the buttons above to preview the document in your browser or download a copy for later.</p>
        <Link className="text-link" href="/contact">Contact Lester <ArrowRight /></Link>
      </section>
    </>
  );
}
