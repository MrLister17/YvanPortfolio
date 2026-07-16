import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  title: "Practicum",
  description: "A public-safe record of Yvan Ramirez’s 480-hour on-site practicum at UL Solutions.",
  alternates: { canonical: "/practicum" },
};

const confirmedItems = [
  "Company, schedule, required hours, and on-site setup",
  "Academic submission records are retained outside the public portfolio",
  "No private company system, customer information, or internal document is published",
];

const protectedItems = [
  "Signed records, evaluation forms, and supervisor documentation",
  "Internal links, prompts, screenshots, research, and workflow details",
  "Customer information, regulatory findings, and proprietary materials",
];

export default function PracticumPage() {
  const practicum = portfolioConfig.practicum;
  return (
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">Practicum / Public record</span>
        <h1>A verified record, shared with <em>clear privacy boundaries.</em></h1>
        <p>This page presents only the practicum facts currently approved for the public portfolio. Responsibilities, technologies, and reflections are omitted until public wording is confirmed.</p>
      </section>

      <section className="section-shell practicum-facts">
        <div><small>Company</small><strong>{practicum.company}</strong></div>
        <div><small>Period</small><strong>{practicum.startDate}<br />to {practicum.endDate}</strong></div>
        <div><small>Required hours</small><strong>{practicum.totalHours}</strong></div>
        <div><small>Setup</small><strong>{practicum.setup}</strong></div>
      </section>

      <section className="section-shell section-block practicum-disclosure">
        <article>
          <FileCheck2 aria-hidden="true" />
          <span className="eyebrow">01 · Confirmed public scope</span>
          <h2>What this page can state.</h2>
          <ul>{confirmedItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <LockKeyhole aria-hidden="true" />
          <span className="eyebrow">02 · Protected information</span>
          <h2>What remains outside the public site.</h2>
          <ul>{protectedItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <aside className="section-shell records-note">
        <ShieldCheck aria-hidden="true" />
        <div><span className="eyebrow">Academic records</span><p>Supporting practicum records, signed documents, and formal appendices are retained in the official academic submission.</p></div>
      </aside>

      <section className="section-shell section-block final-cta">
        <span className="eyebrow">Continue</span>
        <h2>View the verified project work and academic résumé.</h2>
        <div><Link className="button" href="/projects">Explore projects <ArrowRight /></Link><Link className="button button-secondary" href="/resume">View résumé</Link></div>
      </section>
    </>
  );
}
