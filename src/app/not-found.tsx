import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return <section className="not-found section-shell"><span className="error-code">404</span><span className="eyebrow">Page not found</span><h1>This path doesn’t lead to a project.</h1><p>The page may have moved, or the address may be incomplete. The main portfolio routes are still ready to explore.</p><div><Link className="button" href="/"><ArrowLeft /> Go home</Link><Link className="button button-secondary" href="/projects">View projects <ArrowRight /></Link></div></section>;
}
