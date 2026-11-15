import Link from "next/link";
import { ArrowDown, ArrowRight, Code2, ContactRound } from "lucide-react";
import { HeroStack } from "@/components/hero-stack";
import { portfolioConfig } from "@/config/portfolio";

export function HomeHero() {
  return (
    <section className="hero section-shell" aria-labelledby="home-title">
      <div className="hero-copy">
        <div className="hero-overline hero-sequence-1">
          <span>{portfolioConfig.name}</span>
          <span>CS Graduate · {portfolioConfig.specialization}</span>
        </div>
        <h1 id="home-title" className="hero-sequence-2">
          <span>I build AI that</span>
          <em>shows its work.</em>
        </h1>
        <p className="hero-lede hero-sequence-3">
          I&apos;m Yvan, a computer science graduate specializing in machine learning. I build retrieval-grounded assistants and full-stack tools. Every answer points back to a source, and a person stays in control.
        </p>
        <div className="hero-actions hero-sequence-4">
          <Link className="button" href="/projects">See the projects <ArrowRight /></Link>
          <Link className="button button-secondary" href="/about">About me</Link>
        </div>
        <div className="hero-social hero-sequence-5">
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><Code2 /> GitHub</a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><ContactRound /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-sequence-visual"><HeroStack /></div>
      <a className="scroll-cue hero-sequence-scroll" href="#selected-work"><ArrowDown /> Scroll to selected work</a>
    </section>
  );
}
