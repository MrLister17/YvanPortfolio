import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ContactRound,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { projects } from "@/content/projects";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé for Lester Yvan P. Ramirez: education, skills, selected projects, practicum, and contact links.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero resume-hero section-shell">
        <span className="eyebrow">Résumé</span>
        <h1>{portfolioConfig.name}</h1>
        <p>{portfolioConfig.headline}</p>
        <div className={styles.actions}>
          <a
            className="button"
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Preview PDF <ExternalLink />
          </a>
          <a
            className="button button-secondary"
            href={portfolioConfig.resumeUrl}
            download="Lester-Yvan-Ramirez-Resume.pdf"
          >
            Download PDF <Download />
          </a>
        </div>
        <div className="resume-links">
          <a href={`mailto:${portfolioConfig.email}`}>
            <Mail /> Email
          </a>
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer">
            <Code2 /> GitHub
          </a>
          <a
            href={portfolioConfig.linkedInUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ContactRound /> LinkedIn
          </a>
        </div>
      </section>
      <div className="section-shell resume-layout">
        <aside>
          <span className="eyebrow">Profile</span>
          <p>
            Fourth-year computer science student focused on practical
            AI-assisted tools, machine-learning applications, full-stack
            workflows, and user-centered product design.
          </p>
          <span className="eyebrow">Core capabilities</span>
          <ul>
            <li>AI and retrieval workflows</li>
            <li>Next.js and TypeScript</li>
            <li>Python and FastAPI</li>
            <li>Structured data and automation</li>
            <li>Mobile application development</li>
            <li>Testing and product documentation</li>
          </ul>
          <span className="eyebrow">Direction</span>
          <ul>
            {portfolioConfig.careerDirections.map((direction) => (
              <li key={direction}>{direction}</li>
            ))}
          </ul>
        </aside>
        <div className="resume-main">
          <section>
            <span className="eyebrow">Education</span>
            <div className="resume-entry">
              <div>
                <h2>{portfolioConfig.program}</h2>
                <p>{portfolioConfig.school}</p>
              </div>
              <span>
                {portfolioConfig.academicLevel}
                <br />
                Specialization in {portfolioConfig.specialization}
              </span>
            </div>
          </section>
          <section>
            <span className="eyebrow">Selected projects</span>
            {projects.map((project) => (
              <div className="resume-entry" key={project.slug}>
                <div>
                  <h2>
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p>{project.shortDescription}</p>
                  {project.technologies.length > 0 && (
                    <small>{project.technologies.join(" · ")}</small>
                  )}
                </div>
                <span>
                  {project.status}
                  {project.role && (
                    <>
                      <br />
                      {project.role}
                    </>
                  )}
                </span>
              </div>
            ))}
          </section>
          <section>
            <span className="eyebrow">Practicum</span>
            <div className="resume-entry">
              <div>
                <h2>UL Solutions</h2>
                <p>480-hour on-site practicum.</p>
              </div>
              <span>
                June to August 2026
                <br />
                480 required hours
              </span>
            </div>
          </section>
        </div>
      </div>
      <section className="section-shell section-block resume-note">
        <span className="eyebrow">PDF résumé</span>
        <h2>The complete résumé is ready to view or save.</h2>
        <p>
          Use the buttons above to preview the document in your browser or
          download a copy for later.
        </p>
        <Link className="text-link" href="/contact">
          Contact Lester <ArrowRight />
        </Link>
      </section>
    </>
  );
}
