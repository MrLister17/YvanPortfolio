import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, portfolioConfig } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <span className="eyebrow">Start a conversation</span>
          <h2>Thoughtful software starts with a clear problem.</h2>
          <a className="text-link large-link" href={`mailto:${portfolioConfig.email}`}>{portfolioConfig.email} <ArrowUpRight /></a>
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Navigate</span>{navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div><span className="footer-label">Elsewhere</span><a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer">GitHub</a><a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Lester Yvan P. Ramirez</span><span>Built with Next.js · Designed with restraint</span></div>
    </footer>
  );
}
