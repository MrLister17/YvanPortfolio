import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RagExplorer } from "@/components/rag-explorer";

export const metadata: Metadata = { title: "Lab", description: "An interactive, public-safe explanation of a retrieval-augmented generation workflow.", alternates: { canonical: "/lab" } };

export default function LabPage() {
  return (
    <><section className="page-hero section-shell"><span className="eyebrow">Interactive lab</span><h1>See how a grounded answer moves from <em>question to review.</em></h1><p>A simplified, client-side explanation of retrieval-augmented generation. It demonstrates the workflow without calling a private API or pretending to generate a live answer.</p></section><section className="section-shell section-block"><RagExplorer /></section><section className="section-shell section-block lab-context"><div><span className="eyebrow">Why this matters</span><h2>Retrieval is only one part of reliability.</h2></div><div><p>A useful RAG workflow also needs source policy, clear context boundaries, validation, and an honest review state. Better retrieval does not remove the need for judgment.</p><Link className="text-link" href="/projects/gma-research-assistant">See the project context <ArrowRight /></Link></div></section></>
  );
}
