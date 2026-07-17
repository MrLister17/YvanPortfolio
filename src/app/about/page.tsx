import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ExternalLink } from "lucide-react";
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

const certifications = [
  { title: "Foundations of Project Management", issuer: "Google", issued: "March 2026", credentialId: "K6UO2C33HJ0Z", url: "https://www.coursera.org/account/accomplishments/records/K6UO2C33HJ0Z", logo: "/images/certifications/google.png" },
  { title: "Full Stack Web Development", issuer: "Amazon", issued: "March 2026", credentialId: "7235BFDPGSDG", url: "https://www.coursera.org/account/accomplishments/records/7235BFDPGSDG", logo: "/images/certifications/aws.png" },
  { title: "CompTIA Tech+ Certification", issuer: "CompTIA", issued: "December 2025", credentialId: "291250c2-ca40-4cc3-beda-4801b04c191e", url: "https://www.credly.com/earner/earned/badge/291250c2-ca40-4cc3-beda-4801b04c191e", logo: "/images/certifications/comptia-tech-plus.webp" },
  { title: "AWS Academy Graduate: Cloud Foundations", issuer: "Amazon Web Services Training and Certification", issued: "November 2023", credentialId: "8c0a5747-d71d-4357-b90b-da0107652403", url: "https://www.credly.com/earner/earned/badge/8c0a5747-d71d-4357-b90b-da0107652403", logo: "/images/certifications/aws.png" },
];

const techStack = [
  { title: "Mobile development", items: ["Kotlin", "Jetpack Compose"] },
  { title: "Web and services", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Uvicorn"] },
  { title: "AI and retrieval", items: ["Groq Llama 4 Scout", "sentence-transformers", "FAISS", "pgvector", "OpenAI and Hugging Face libraries", "NumPy", "Pandas"] },
  { title: "Data, cloud, and delivery", items: ["PostgreSQL", "SQLite", "Drizzle ORM", "Firebase Admin SDK", "Git and GitHub", "Vercel", "Cloudflare Workers"] },
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
        <Reveal variant="mask" className="section-heading"><div><span className="eyebrow">Professional certifications</span><h2>Credentials that support practical delivery.</h2></div><p>Verification links open directly with the issuing platform.</p></Reveal>
        <div className={styles.certificationGrid}>{certifications.map((certification) => <article key={certification.credentialId} className={styles.certification}><div className={styles.certificationLogo}><Image src={certification.logo} alt={`${certification.issuer} logo`} width={58} height={58} sizes="58px" /></div><div><div className={styles.certificationTitle}><Award aria-hidden="true" /><h3>{certification.title}</h3></div><p>{certification.issuer} · Issued {certification.issued}</p><small>Credential ID: {certification.credentialId}</small><a className="text-link" href={certification.url} target="_blank" rel="noreferrer">Show credential <ExternalLink /></a></div></article>)}</div>
      </section>

      <section className="section-shell section-block">
        <Reveal variant="mask" className="section-heading"><div><span className="eyebrow">Education and tech stack</span><h2>Computer science foundations, applied across the stack.</h2></div><p>{portfolioConfig.school} · Bachelor of Science in Computer Science · Machine Learning specialization</p></Reveal>
        <div className={styles.stackGrid}>{techStack.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section-shell section-block">
        <Reveal variant="mask" className="section-heading"><div><span className="eyebrow">A little beyond the work</span><h2>Personal moments that shape the perspective I bring to the work.</h2></div><p>Learning is supported by curiosity, movement, and time away from the screen.</p></Reveal>
        <div className={styles.photoGrid}>{personalPhotos.map((photo) => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} width={photo.src.endsWith("2941.jpg") ? 1440 : photo.src.endsWith("5880.jpg") ? 768 : 1080} height={photo.src.endsWith("5880.jpg") ? 1364 : 1920} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" /><figcaption>{photo.caption}</figcaption></figure>)}</div>
      </section>

      <section className="section-shell section-block final-cta"><span className="eyebrow">Next</span><h2>Explore the projects behind the profile.</h2><div><Link href="/projects" className="button">View projects <ArrowRight /></Link><Link href="/resume" className="button button-secondary">View résumé</Link></div></section>
    </>
  );
}
