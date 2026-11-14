import { Reveal } from "@/components/reveal";
import type { AiSystem } from "@/types/project";

/** Puts a project's retrieval and model-tuning design directly under the case-study hero. */
export function AiSpotlight({ system }: { system: AiSystem }) {
  return (
    <section className="section-shell section-block ai-spotlight" aria-labelledby="ai-spotlight-title">
      <Reveal variant="mask" className="section-heading">
        <div><span className="eyebrow">{system.eyebrow}</span><h2 id="ai-spotlight-title">{system.headline}</h2></div>
        <p>{system.intro}</p>
      </Reveal>
      <ul className="ai-stats" data-reveal-group="">
        {system.stats.map((stat) => <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>)}
      </ul>
      <div className="ai-columns">
        <div>
          <h3>{system.retrievalTitle}</h3>
          <ol className="ai-steps" data-reveal-group="">
            {system.retrieval.map((step, index) => (
              <li key={step.label}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><strong>{step.label}</strong><p>{step.detail}</p></div></li>
            ))}
          </ol>
        </div>
        <div>
          <h3>{system.tuningTitle}</h3>
          <div className="ai-tuning" data-reveal-group="">
            {system.tuning.map((item) => (
              <article key={item.label}><small>{item.label}</small><strong>{item.value}</strong><p>{item.detail}</p></article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
