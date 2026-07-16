import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { ArchitectureExplorer } from "@/components/architecture-explorer";
import { CaseHeroMedia } from "@/components/case-hero-media";
import { Gallery } from "@/components/gallery";
import { projects, getProject } from "@/content/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.seo.title, description: project.seo.description, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: project.seo.title, description: project.seo.description, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.shortDescription, creator: { "@type": "Person", name: "Lester Yvan P. Ramirez" }, keywords: project.technologies.join(", ") };

  return (
    <article className="case-study">
      <div className="case-progress" aria-hidden="true" />
      <header className="case-hero section-shell">
        <Link className="back-link" href="/projects"><ArrowLeft /> Back to projects</Link>
        <div className="case-kicker"><span>{project.categories.join(" · ")}</span><span>{project.status}</span></div>
        <h1>{project.title}</h1><p className="case-positioning">{project.positioningStatement}</p>
        {(project.role || project.timeframe || project.technologies.length > 0) && <div className="case-facts">{project.role && <div><small>Role</small><strong>{project.role}</strong></div>}{project.timeframe && <div><small>Timeframe</small><strong>{project.timeframe}</strong></div>}{project.technologies.length > 0 && <div><small>Stack</small><strong>{project.technologies.join(" · ")}</strong></div>}</div>}
      </header>

      <CaseHeroMedia project={project} index={index} />

      {project.embedUrl && <section className="section-shell section-block game-play-section"><div className="section-heading"><div><span className="eyebrow">Playable demo</span><h2>Play the game directly in the portfolio.</h2></div><p>Use the frame below for the live game, or open it in a new tab for the largest play area. Click or tap the game before using its keyboard controls.</p></div><div className="game-embed"><iframe src={project.embedUrl} title={`Play ${project.title}`} loading="lazy" sandbox="allow-scripts allow-same-origin" allow="autoplay; fullscreen" /></div><div className="game-embed-actions"><a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Open game <ExternalLink /></a>{project.repositoryUrl && <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer"><Code2 /> View source</a>}</div></section>}

      <section className="section-shell section-block case-overview"><div><span className="section-number">01</span><span className="eyebrow">Overview</span><h2>{project.shortDescription}</h2></div><div><h3>The problem</h3><p>{project.problem}</p><h3>Intended users</h3><p>{project.users}</p><h3>Constraints</h3><ul>{project.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}</ul></div></section>
      {project.gallery.length > 0 && <section className="section-shell section-block"><div className="section-heading compact"><div><span className="section-number">02</span><span className="eyebrow">Product evidence</span><h2>Interface states from the working prototype.</h2></div></div><Gallery images={project.gallery} /></section>}
      {project.contributionSummary && project.contribution && <section className="section-shell section-block contribution-section"><span className="section-number">{project.gallery.length ? "03" : "02"}</span><div><span className="eyebrow">My contribution</span><h2>{project.contributionSummary}</h2><p>{project.contribution}</p></div></section>}
      {project.approach.length > 0 && <section className="section-shell section-block"><div className="section-heading"><div><span className="eyebrow">Approach</span><h2>A structured path through the system.</h2></div></div><ol className="approach-list">{project.approach.map((step, stepIndex) => <li key={step}><span>{String(stepIndex + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol></section>}
      <section className="section-shell section-block"><div className="section-heading"><div><span className="eyebrow">Key features</span><h2>What the experience is designed to support.</h2></div></div><div className="feature-grid">{project.keyFeatures.map((feature, featureIndex) => <article key={feature.title}><span>{String(featureIndex + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></section>
      {project.architecture.length > 0 && <section className="section-shell section-block architecture-section"><div className="section-heading"><div><span className="eyebrow">Architecture explorer</span><h2>From interface to reviewed outcome.</h2></div><p>Select a component to inspect its role. This is a public-safe, conceptual view of the implemented system.</p></div><ArchitectureExplorer nodes={project.architecture} /></section>}
      {project.challenges.length > 0 && <section className="section-shell section-block challenges-grid"><div><span className="eyebrow">Challenges & responses</span><h2>Engineering through the constraints.</h2></div><div>{project.challenges.map((item) => <details key={item.challenge}><summary>{item.challenge}<span aria-hidden="true">+</span></summary><p>{item.response}</p></details>)}</div></section>}
      {(project.outcomes.length > 0 || project.lessons.length > 0) && <section className="section-shell section-block lessons-grid">{project.outcomes.length > 0 && <div><span className="eyebrow">Outcomes</span>{project.outcomes.map((item) => <p key={item}>{item}</p>)}</div>}{project.lessons.length > 0 && <div><span className="eyebrow">Lessons</span>{project.lessons.map((item) => <p key={item}>{item}</p>)}</div>}</section>}
      <section className="section-shell section-block case-limitations"><div><span className="eyebrow">Limitations & public context</span><h2>Clear boundaries around the case study.</h2></div><div><ul>{project.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}</ul>{project.visibilityNote && <p>{project.visibilityNote}</p>}</div></section>
      <nav className="section-shell project-pagination" aria-label="Project navigation"><Link href={`/projects/${previous.slug}`}><ArrowLeft /><span><small>Previous project</small>{previous.title}</span></Link><Link href={`/projects/${next.slug}`}><span><small>Next project</small>{next.title}</span><ArrowRight /></Link></nav>
      <div className="section-shell back-projects-link"><Link className="text-link" href="/projects"><ArrowLeft /> Back to all projects</Link></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
