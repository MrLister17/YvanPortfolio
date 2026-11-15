"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const layers = [
  { label: "Sources", detail: "Approved, attributable references go in first. If it is not in the sources, it is not in the answer." },
  { label: "Retrieval", detail: "Each question pulls only the passages that match it, with where they came from still attached." },
  { label: "Model", detail: "The model drafts from that evidence under strict rules about scope, format, and safety." },
  { label: "Checks", detail: "Evaluation against reference answers and human review catch what the model gets wrong." },
  { label: "Answer", detail: "What reaches the user can be traced back, layer by layer, to its source." },
];

/** A 3D exploded stack showing how a grounded answer is built. Auto-plays until touched. */
export function HeroStack() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(layers.length - 1);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched || reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % layers.length), 2600);
    return () => window.clearInterval(timer);
  }, [touched, reduceMotion]);

  const select = (index: number) => {
    setTouched(true);
    setActive(index);
  };

  return (
    <div className="stack-wrap" data-tilt-source="">
      <div className="stack-scene" aria-hidden="true">
        <div className="stack-float">
          <div className="stack">
            {layers.map((layer, index) => (
              <div
                key={layer.label}
                className="stack-plate"
                // Layers above the chosen one lift away and turn to outlines so it is never hidden.
                data-state={index === active ? "active" : index < active ? "below" : "above"}
                style={{ "--i": index, "--gap": index > active ? 1 : 0 } as React.CSSProperties}
                onClick={() => select(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{layer.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="stack-panel">
        <div className="stack-dots" role="group" aria-label="How a grounded answer is built, step by step">
          {layers.map((layer, index) => (
            <button key={layer.label} type="button" className="stack-dot" aria-pressed={index === active} onClick={() => select(index)}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="sr-only">Step {index + 1}: </span>{layer.label}
            </button>
          ))}
        </div>
        <div className="stack-caption" aria-live={touched ? "polite" : "off"}>
          <p key={active} className="swap-in">{layers[active].detail}</p>
        </div>
        <Link className="text-link stack-link" href="/lab">Walk through a worked example <ArrowRight /></Link>
      </div>
    </div>
  );
}
