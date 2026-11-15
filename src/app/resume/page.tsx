import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, ContactRound, Download, ExternalLink, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { projects } from "@/content/projects";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé for Lester Yvan P. Ramirez, BS Computer Science graduate: experience, education, projects, skills, certifications, and contact links.",
  alternates: { canonical: "/resume" },
};

// Mirrors public/documents/resume/Ramirez-Resume.pdf. Update both together.
const experience = [
  {
    role: "AI Intern",
    organization: "GMA Research Team, UL Solutions",
    period: "Jun 2026 – Present",
    points: [
      "Mapped the Chem-Envi regulatory research workflow and converted researcher feedback into requirements for the GMA Research Assistant, a working demonstration for approved knowledge discovery, AI-assisted research, human review, and Excel-ready outputs.",
      "Developed and refined React/TypeScript and Next.js/Vite interfaces with Python/FastAPI services, SQLAlchemy/Alembic, PostgreSQL/pgvector, and REST API integration.",
      "Automated workbook ingestion, validation, versioning, review, and export; added source traceability, audit logging, role-aware workflows, and Docker-based local delivery.",
      "Used Git/GitHub, Pytest, CI, linting, type checks, regression tests, and browser QA; explored Microsoft Copilot Studio and SharePoint-supported agents within governance and access constraints.",
    ],
  },
  {
    role: "Student Assistant",
    organization: "Marketing and Admissions Office, Mapúa MCL",
    period: "Nov 2024 – Jan 2025",
    points: ["Engaged prospective students during school-to-school recruitment and coordinated promotional inventory for large events and recruitment caravans."],
  },
  {
    role: "Student Assistant",
    organization: "Information Technology Services Office, Mapúa MCL",
    period: "May 2024 – Sep 2024",
    points: ["Produced and quality-checked student IDs and provided first-level hardware and software support for daily office operations."],
  },
];

const skills = [
  { title: "AI and research", items: "RAG, LLM prototyping, source grounding, Gemini/Ollama integrations, Microsoft Copilot Studio, SharePoint-supported retrieval, Hugging Face, ROUGE" },
  { title: "Development", items: "Python, FastAPI, JavaScript/TypeScript, React, Next.js, Vite, REST APIs, SQL, Firebase" },
  { title: "Data and cloud", items: "PostgreSQL, pgvector, SQLAlchemy, Alembic, Supabase, AWS, Docker, Excel/openpyxl" },
  { title: "Delivery", items: "Git/GitHub, Pytest, CI, linting, type checking, regression testing, browser QA, requirements mapping, technical documentation" },
];

const certifications = ["AWS Academy Graduate: Cloud Foundations", "CompTIA Tech+", "Google Foundations of Project Management", "Amazon Full Stack Web Development"];

export default function ResumePage() {
  return (
    <>
      <section className="page-hero resume-hero section-shell">
        <span className="eyebrow">Résumé</span>
        <h1>{portfolioConfig.name}</h1>
        <p>AI Intern · Full-Stack Developer · BS Computer Science Graduate</p>
        <div className={styles.actions}>
          <a className="button" href={portfolioConfig.resumeUrl} target="_blank" rel="noreferrer">Preview PDF <ExternalLink /></a>
          <a className="button button-secondary" href={portfolioConfig.resumeUrl} download="Lester-Yvan-Ramirez-Resume.pdf">Download PDF <Download /></a>
        </div>
        <div className="resume-links">
          <a href={`mailto:${portfolioConfig.email}`}><Mail /> Email</a>
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><Code2 /> GitHub</a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><ContactRound /> LinkedIn</a>
        </div>
      </section>

      <div className="section-shell resume-layout">
        <aside>
          <span className="eyebrow">Profile</span>
          <p>
            BS Computer Science graduate specializing in Machine Learning and an AI Intern with hands-on experience translating regulatory research workflows into evidence-grounded web tools. AWS and CompTIA certified, with strengths in requirements gathering, testing, documentation, and stakeholder communication.
          </p>
          <span className="eyebrow">Certifications</span>
          <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
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
            {skills.map((group) => (
              <div className="resume-entry" key={group.title}>
                <div><h2>{group.title}</h2><p>{group.items}</p></div>
              </div>
            ))}
          </section>

          <section>
            <span className="eyebrow">Leadership</span>
            <div className="resume-entry">
              <div>
                <h2>CCIS Student Council Treasurer</h2>
                <p>Managed and audited a budget exceeding PHP 250,000 and coordinated campus initiatives with university offices and external partners.</p>
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
