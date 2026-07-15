import type { Metadata } from "next";
import { ArrowUpRight, Code2, ContactRound, Mail } from "lucide-react";
import { ContactActions } from "@/components/contact-actions";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = { title: "Contact", description: "Contact Yvan Ramirez about applied AI, machine-learning, full-stack, mobile, or collaboration opportunities.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <section className="contact-page section-shell">
      <div className="contact-intro"><span className="eyebrow">Contact</span><h1>Let’s talk about a <em>clear problem worth solving.</em></h1><p>If you’d like to discuss a project, an entry-level opportunity, or a technical idea, email is the simplest place to start.</p><ContactActions /></div>
      <div className="contact-panel"><span className="eyebrow">Direct channels</span><a href={`mailto:${portfolioConfig.email}`}><span><Mail /> Email<small>{portfolioConfig.email}</small></span><ArrowUpRight /></a><a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><span><Code2 /> GitHub<small>@MrLister17</small></span><ArrowUpRight /></a><a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><span><ContactRound /> LinkedIn<small>Lester Yvan P. Ramirez</small></span><ArrowUpRight /></a><div className="contact-boundary"><span className="status-dot" /><p>For project inquiries, academic review, entry-level roles, and thoughtful collaboration.</p></div></div>
    </section>
  );
}
