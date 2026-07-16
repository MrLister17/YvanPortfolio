import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { portfolioConfig } from "@/config/portfolio";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Academic profile and verified technical interests of Yvan Ramirez, a fourth-year computer science student specializing in machine learning.",
  alternates: { canonical: "/about" },
};

const interests = ["Applied artificial intelligence", "Machine learning", "Retrieval-augmented generation", "AI-assisted research", "Workflow automation", "Full-stack development", "Mobile development", "Data processing", "User-centered product design", "AI evaluation and reliability"];

const evidenceGroups = [
  { title: "AI & retrieval workflows", evidence: "GMA Research Assistant · Fitness Buddy overview" },
  { title: "Full-stack development", evidence: "GMA Research Assistant" },
  { title: "Data & spreadsheet workflows", evidence: "GMA Research Assistant" },
  { title: "Mobile application concepts", evidence: "Fitness Buddy overview" },
];

const personalPhotos = [
  { src: "/images/profile/img-2941.jpg", alt: "Yvan Ramirez taking a mirror photo after a workout", caption: "Training" },
  { src: "/images/profile/img-5880.jpg", alt: "Yvan Ramirez standing in front of traditional red temple architecture", caption: "Travel" },
  { src: "/images/profile/img-4801.jpg", alt: "Yvan Ramirez standing outdoors beside a geometric wall", caption: "Perspective" },
  { src: "/images/profile/img-5447.jpg", alt: "Yvan Ramirez beneath blooming pink trees", caption: "Outside the screen" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">About / Academic profile</span>
        <h1>From computer science foundations to <em>applied AI systems.</em></h1>
        <p>{portfolioConfig.name} is a {portfolioConfig.academicLevel.toLowerCase()} {portfolioConfig.program} student at {portfolioConfig.school}, specializing in {portfolioConfig.specialization}.</p>
      </section>

      <section className="section-shell section-block about-grid">
        <Reveal variant="mask" className="about-statement">
          <span className="section-number">01</span>
          <span className="eyebrow">Current direction</span>
          <h2>{portfolioConfig.headline}</h2>
          <p>The current portfolio documents academic and prototype work across AI-assisted research, retrieval workflows, full-stack interfaces, structured data, automation, and mobile application concepts.</p>
          <p>Each public claim is tied to source material, demonstrated functionality, or an explicitly supplied portfolio fact.</p>
        </Reveal>
        <Reveal variant="fade" className={`identity-card ${styles.profileCard}`}>
          <figure className={styles.profilePhoto}>
            <Image src="/images/profile/img-3863.jpg" alt="Portrait of Lester Yvan P. Ramirez outdoors" width={1440} height={1920} sizes="(max-width: 800px) 100vw, 34vw" priority />
          </figure>
          <dl><div><dt>Full name</dt><dd>{portfolioConfig.name}</dd></div><div><dt>Program</dt><dd>{portfolioConfig.program}</dd></div><div><dt>Specialization</dt><dd>{portfolioConfig.specialization}</dd></div><div><dt>Academic level</dt><dd>{portfolioConfig.academicLevel}</dd></div><div><dt>School</dt><dd>{portfolioConfig.school}</dd></div></dl>
        </Reveal>
      </section>

      <section className="section-shell section-block">
        <Reveal variant="mask" className="section-heading"><div><span className="eyebrow">02 · Current interests</span><h2>Technical areas represented in the work.</h2></div><p>These interests are connected to the verified project themes and portfolio direction.</p></Reveal>
        <div className="interest-grid">{interests.map((interest, index) => <div key={interest}><span>{String(index + 1).padStart(2, "0")}</span>{interest}</div>)}</div>
      </section>

      <section className="section-shell section-block evidence-section">
        <Reveal variant="mask"><span className="eyebrow">03 · Skills through evidence</span><h2>Capabilities shown in context.</h2></Reveal>
        <div className="evidence-list">{evidenceGroups.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.evidence}</p></article>)}</div>
      </section>

      <section className="section-shell section-block">
        <Reveal variant="mask" className="section-heading"><div><span className="eyebrow">A little beyond the work</span><h2>Personal moments that shape the perspective I bring to the work.</h2></div><p>Learning is supported by curiosity, movement, and time away from the screen.</p></Reveal>
        <div className={styles.photoGrid}>{personalPhotos.map((photo) => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} width={photo.src.endsWith("2941.jpg") ? 1440 : photo.src.endsWith("5880.jpg") ? 768 : 1080} height={photo.src.endsWith("5880.jpg") ? 1364 : 1920} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" /><figcaption>{photo.caption}</figcaption></figure>)}</div>
      </section>

      <section className="section-shell section-block final-cta"><span className="eyebrow">Next</span><h2>Explore the projects behind the profile.</h2><div><Link href="/projects" className="button">View projects <ArrowRight /></Link><Link href="/resume" className="button button-secondary">View résumé</Link></div></section>
    </>
  );
}
