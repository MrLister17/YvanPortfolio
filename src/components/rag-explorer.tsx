"use client";

import { useState } from "react";

const steps = [
  { label: "Question", detail: "A user asks which reviewed requirement applies to a sample product." },
  { label: "Context", detail: "The system identifies the workspace, jurisdiction, and product context." },
  { label: "Retrieval", detail: "Approved sample records are searched for relevant, current evidence." },
  { label: "Evidence", detail: "The most relevant passages are assembled with their source references." },
  { label: "Generation", detail: "A model drafts an answer using only the supplied context." },
  { label: "Review", detail: "A person inspects the answer and evidence before approval or export." },
];

export function RagExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="rag-explorer">
      <div className="rag-steps" role="group" aria-label="RAG pipeline stages">
        {steps.map((step, index) => <button key={step.label} aria-pressed={active === index} onClick={() => setActive(index)}><small>{index + 1}</small>{step.label}</button>)}
      </div>
      <div className="rag-output" aria-live="polite"><span className="eyebrow">Stage {active + 1} of {steps.length}</span><h2>{steps[active].label}</h2><p>{steps[active].detail}</p><div className="rag-meter"><span style={{ width: `${((active + 1) / steps.length) * 100}%` }} /></div></div>
      <p className="lab-note">Educational visualization only. It does not call a model or submit user data.</p>
    </div>
  );
}
