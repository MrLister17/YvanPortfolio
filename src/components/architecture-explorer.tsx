"use client";

import { useState } from "react";
import type { ArchitectureNode } from "@/types/project";

export function ArchitectureExplorer({ nodes }: { nodes: ArchitectureNode[] }) {
  const [active, setActive] = useState(nodes[0]?.id);
  const selected = nodes.find((node) => node.id === active) || nodes[0];
  return (
    <div className="architecture-explorer">
      <div className="architecture-track" role="list" aria-label="Project architecture components">
        {nodes.map((node, index) => (
          <div className="architecture-step" key={node.id} role="listitem">
            <button className={active === node.id ? "active" : ""} aria-pressed={active === node.id} onClick={() => setActive(node.id)}>
              <small>{String(index + 1).padStart(2, "0")}</small><span>{node.label}</span>
            </button>
            {index < nodes.length - 1 && <span className="architecture-line" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className="architecture-detail" aria-live="polite"><span className="eyebrow">Selected component</span><h3>{selected.label}</h3><p>{selected.detail}</p></div>
    </div>
  );
}
