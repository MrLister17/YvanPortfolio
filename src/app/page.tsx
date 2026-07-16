import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, ContactRound, Mail } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { portfolioConfig } from "@/config/portfolio";
import { projects } from "@/content/projects";

const skillGroups = [
  { title: "AI & RAG systems", skills: ["Retrieval-augmented generation", "AI-assisted workflows", "Provider integration", "Evaluation thinking"], project: "GMA Research Assistant · Fitness Buddy" },
  { title: "Product engineering", skills: ["Next.js & TypeScript", "FastAPI & Python", "Mobile interfaces", "API integration"], project: "Demonstrated across the case studies" },
  { title: "Data & reliability", skills: ["Structured data", "Spreadsheet workflows", "Review systems", "Source governance"], project: "GMA Research Assistant" },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section id="selected-work" className="section-shell section-block numbered-section">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">01 · Selected work</span><h2>Systems designed around real tasks.</h2></div>
          <p>Two focused case studies across AI-assisted research, full-stack workflows, mobile experience, and responsible use of retrieved context.</p>
        </Reveal>
        <div className="project-grid"><ProjectCard project={projects[0]} lead index={0} /><ProjectCard project={projects[1]} index={1} /></div>
        <div className="section-link"><Link className="text-link" href="/projects">Explore all projects <ArrowRight /></Link></div>
      </section>

      <section className="section-shell section-block home-about numbered-section">
        <Reveal variant="fade" className="home-about-visual">
          <span className="home-monogram">LYR</span>
          <div><small>{portfolioConfig.academicLevel}</small><strong>{portfolioConfig.specialization}</strong></div>
        </Reveal>
        <Reveal className="home-about-copy">
          <span className="eyebrow">02 · About me</span>
          <h2>Computer science foundations, applied to AI systems.</h2>
          <p>{portfolioConfig.name} is a fourth-year {portfolioConfig.program} student at {portfolioConfig.school}, specializing in {portfolioConfig.specialization}.</p>
          <p>Current technical interests include applied artificial intelligence, retrieval-augmented generation, workflow automation, full-stack development, data processing, and user-centered interfaces.</p>
          <Link className="text-link" href="/about">View the academic profile <ArrowRight /></Link>
        </Reveal>
      </section>

      <section className="section-shell section-block skills-section numbered-section">
        <Reveal variant="mask" className="section-heading">
          <div><span className="eyebrow">03 · Skills through projects</span><h2>Capabilities connected to evidence.</h2></div>
          <p>Tools are presented through the projects where they appear, not as arbitrary percentages or unsupported proficiency labels.</p>
        </Reveal>
        <div className="skill-groups">{skillGroups.map((group, index) => <article key={group.title}><span className="skill-index">{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><small>Evidence: {group.project}</small></article>)}</div>
      </section>

      <section className="section-shell section-block split-feature numbered-section">
        <Reveal variant="fade" className="practicum-card">
          <div><span className="eyebrow">04 · Practicum</span><h2>A verified public record of the practicum period.</h2><p>{portfolioConfig.practicum.company} · {portfolioConfig.practicum.startDate} to {portfolioConfig.practicum.endDate} · {portfolioConfig.practicum.setup}. Detailed responsibilities and reflections remain private until approved for public use.</p><Link className="text-link" href="/practicum">View practicum details <ArrowRight /></Link></div>
          <dl><div><dt>Period</dt><dd>June 8 to August 15</dd></div><div><dt>Setup</dt><dd>{portfolioConfig.practicum.setup}</dd></div><div><dt>Required hours</dt><dd>{portfolioConfig.practicum.totalHours}</dd></div></dl>
        </Reveal>
      </section>

      <section className="section-shell section-block home-contact numbered-section">
        <Reveal variant="mask">
          <span className="eyebrow">05 · Contact</span>
          <h2>Have a project, opportunity, or idea worth discussing?</h2>
        </Reveal>
        <Reveal variant="fade" className="home-contact-actions">
          <a href={`mailto:${portfolioConfig.email}`}><span><Mail /> Email</span><small>{portfolioConfig.email}</small><ArrowUpRight /></a>
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><span><Code2 /> GitHub</span><small>@MrLister17</small><ArrowUpRight /></a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><span><ContactRound /> LinkedIn</span><small>Lester Yvan P. Ramirez</small><ArrowUpRight /></a>
          <Link className="button" href="/contact">Open contact page <ArrowRight /></Link>
        </Reveal>
      </section>
    </>
  );
}
