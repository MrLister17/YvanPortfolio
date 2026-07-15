"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Code2, ContactRound } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { portfolioConfig } from "@/config/portfolio";

export function HomeHero() {
  return (
    <section className="hero section-shell" aria-labelledby="home-title">
      <div className="hero-copy">
        <div className="hero-overline hero-sequence-1">
          <span>Portfolio / 2026</span>
          <span>{portfolioConfig.academicLevel} · {portfolioConfig.specialization}</span>
        </div>
        <p className="hero-name hero-sequence-2">{portfolioConfig.name}</p>
        <h1 id="home-title" className="hero-sequence-3">
          <span>Machine Learning Student</span>
          <em>&amp; Applied AI Developer</em>
        </h1>
        <p className="hero-lede hero-sequence-4">
          I design and build practical AI-assisted tools, machine-learning applications, and digital experiences that make complex workflows clearer and more useful.
        </p>
        <div className="hero-actions hero-sequence-5">
          <Link className="button" href="/projects">Explore my work <ArrowRight /></Link>
          <Link className="button button-secondary" href="/about">About me</Link>
        </div>
        <div className="hero-social hero-sequence-5">
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><Code2 /> GitHub</a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><ContactRound /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-sequence-visual"><HeroVisual /></div>
      <a className="scroll-cue hero-sequence-scroll" href="#selected-work"><ArrowDown /> Scroll to selected work</a>
    </section>
  );
}
