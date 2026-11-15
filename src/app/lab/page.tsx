import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RagExplorer } from "@/components/rag-explorer";

export const metadata: Metadata = { title: "Lab", description: "An interactive walk-through of how a retrieval-augmented answer is built and reviewed.", alternates: { canonical: "/lab" } };

export default function LabPage() {
  return (
    <><section className="page-hero section-shell"><span className="eyebrow">Interactive lab</span><h1>See how a grounded answer moves from <em>question to review.</em></h1><p>A simplified walk-through of retrieval-augmented generation. Step through each stage to see what happens between a question and an approved answer.</p></section><section className="section-shell section-block"><RagExplorer /></section><section className="section-shell section-block lab-context"><div><span className="eyebrow">Why this matters</span><h2>Retrieval is only one part of reliability.</h2></div><div><p>A useful RAG workflow also needs source policy, clear context boundaries, validation, and an honest review state. Better retrieval does not remove the need for judgment.</p><Link className="text-link" href="/projects/gma-research-assistant">See it in the GMA Research Assistant <ArrowRight /></Link></div></section></>
  );
}
