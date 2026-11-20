import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, DatabaseZap, Layers, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { portfolioConfig } from "@/config/portfolio";
import { projects } from "@/content/projects";

// Drawn from the résumé skill groups; each links back to where it was used.
const skillGroups = [
  { icon: BrainCircuit, title: "AI and evaluation", skills: ["RAG and source grounding", "LLM prototyping and fine-tuning", "ROUGE-L and semantic similarity", "RAGAS-style evaluation"], project: "Fitness Buddy · GMA Research Assistant" },
  { icon: Layers, title: "Full-stack development", skills: ["Python and FastAPI", "React, Next.js, and TypeScript", "PostgreSQL and pgvector", "Kotlin and Jetpack Compose"], project: "AteAnne · GMA Research Assistant · Fitness Buddy" },
  { icon: DatabaseZap, title: "Research automation", skills: ["Power Automate and Office Scripts", "Copilot Studio agents", "Workbook validation and export", "Traceable review workflows"], project: "GMA DataReady · GMA Research Assistant" },
];

export default function Home() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <>
      <HomeHero project={featuredProject} />

      <section id="selected-work" className="section-shell section-block numbered-section">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">01 · Selected work</span><h2>More selected projects.</h2></div>
          <p>A regulatory research assistant, a workbook automation tool, an AI cardio coach, and a browser game. Open any of them to see how it works and what I built.</p>
        </Reveal>
        <div className="project-grid" data-reveal-group="">{otherProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
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
          <p>I currently work as a {portfolioConfig.currentRole.title} in {portfolioConfig.currentRole.team} at {portfolioConfig.currentRole.company}, developing AI-assisted research applications and workbook automation tools.</p>
          <Link className="text-link" href="/about">More about me <ArrowRight /></Link>
        </Reveal>
      </section>

      <section className="section-shell section-block skills-section numbered-section">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">03 · Skills</span><h2>What I work with.</h2></div>
          <p>Three areas I use every week. Each one points to the project where you can see it in use.</p>
        </Reveal>
        <div className="skill-groups" data-reveal-group="">{skillGroups.map((group) => <article key={group.title}><span className="icon-tile"><group.icon aria-hidden="true" /></span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><small>Used in: {group.project}</small></article>)}</div>
      </section>

      <section className="section-shell section-block split-feature numbered-section">
        <Reveal variant="fade" className="practicum-card">
          <div><span className="eyebrow">04 · Experience</span><h2>{portfolioConfig.currentRole.title} in {portfolioConfig.currentRole.team} at {portfolioConfig.currentRole.company}.</h2><p>I develop AI-assisted research applications and workbook automation tools, and translate researcher requirements into application features, validation checks, and traceable review workflows.</p><Link className="text-link" href="/experience">See my experience <ArrowRight /></Link></div>
          <dl><div><dt>Role</dt><dd>{portfolioConfig.currentRole.title}</dd></div><div><dt>Period</dt><dd>{portfolioConfig.currentRole.period}</dd></div><div><dt>Before that</dt><dd>AI Intern, Jun to Sep 2026</dd></div></dl>
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
