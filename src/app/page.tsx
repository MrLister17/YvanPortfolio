import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, DatabaseZap, Layers, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { portfolioConfig } from "@/config/portfolio";
import { projects } from "@/content/projects";

const skillGroups = [
  { icon: BrainCircuit, title: "AI & RAG systems", skills: ["Retrieval-augmented generation", "AI-assisted workflows", "Provider integration", "Evaluation thinking"], project: "GMA Research Assistant · Fitness Buddy" },
  { icon: Layers, title: "Product engineering", skills: ["Next.js & TypeScript", "FastAPI & Python", "Mobile interfaces", "API integration"], project: "Demonstrated across the case studies" },
  { icon: DatabaseZap, title: "Data & reliability", skills: ["Structured data", "Spreadsheet workflows", "Review systems", "Source governance"], project: "GMA Research Assistant" },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section id="selected-work" className="section-shell section-block numbered-section">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">01 · Selected work</span><h2>Three builds, one rule: show the evidence.</h2></div>
          <p>A regulatory research assistant, an AI cardio coach, and a browser game. Open any of them to see how it works and what I built.</p>
        </Reveal>
        <div className="project-grid" data-reveal-group="">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        <div className="section-link"><Link className="text-link" href="/projects">Explore all projects <ArrowRight /></Link></div>
      </section>

      <section className="section-shell section-block home-about numbered-section">
        <Reveal variant="fade" className="home-about-visual">
          <span className="home-monogram">LYR</span>
          <div><small>BS Computer Science · {portfolioConfig.academicLevel}</small><strong>{portfolioConfig.specialization}</strong></div>
        </Reveal>
        <Reveal className="home-about-copy">
          <span className="eyebrow">02 · About me</span>
          <h2>Computer science foundations, applied to AI systems.</h2>
          <p>{portfolioConfig.name} holds a {portfolioConfig.program} from {portfolioConfig.school}, with a specialization in {portfolioConfig.specialization}.</p>
          <p>I currently work as an {portfolioConfig.currentRole.title} with the {portfolioConfig.currentRole.team} at {portfolioConfig.currentRole.company}, building evidence-grounded research tools with Python, FastAPI, React, and PostgreSQL.</p>
          <Link className="text-link" href="/about">More about me <ArrowRight /></Link>
        </Reveal>
      </section>

      <section className="section-shell section-block skills-section numbered-section">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">03 · Skills through projects</span><h2>Capabilities connected to evidence.</h2></div>
          <p>Tools are presented through the projects where they appear, not as arbitrary percentages or unsupported proficiency labels.</p>
        </Reveal>
        <div className="skill-groups" data-reveal-group="">{skillGroups.map((group) => <article key={group.title}><span className="icon-tile"><group.icon aria-hidden="true" /></span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><small>Evidence: {group.project}</small></article>)}</div>
      </section>

      <section className="section-shell section-block split-feature numbered-section">
        <Reveal variant="fade" className="practicum-card">
          <div><span className="eyebrow">04 · Experience</span><h2>{portfolioConfig.currentRole.title} with the {portfolioConfig.currentRole.team} at {portfolioConfig.currentRole.company}.</h2><p>I map regulatory research workflows, turn researcher feedback into requirements, and build the full-stack tools that make AI-assisted research traceable and reviewable.</p><Link className="text-link" href="/experience">See my experience <ArrowRight /></Link></div>
          <dl><div><dt>Role</dt><dd>{portfolioConfig.currentRole.title}</dd></div><div><dt>Period</dt><dd>{portfolioConfig.currentRole.period}</dd></div><div><dt>Setup</dt><dd>{portfolioConfig.practicum.setup}</dd></div></dl>
        </Reveal>
      </section>

      <section className="section-shell section-block home-contact numbered-section">
        <Reveal variant="mask">
          <span className="eyebrow">05 · Contact</span>
          <h2>Have a project, opportunity, or idea worth discussing?</h2>
        </Reveal>
        <Reveal variant="fade" className="home-contact-actions">
          <a href={`mailto:${portfolioConfig.email}`}><span><Mail /> Email</span><small>{portfolioConfig.email}</small><ArrowUpRight /></a>
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><span><GithubIcon /> GitHub</span><small>@MrLister17</small><ArrowUpRight /></a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><span><LinkedinIcon /> LinkedIn</span><small>Lester Yvan P. Ramirez</small><ArrowUpRight /></a>
          <Link className="button" href="/contact">Open contact page <ArrowRight /></Link>
        </Reveal>
      </section>
    </>
  );
}
