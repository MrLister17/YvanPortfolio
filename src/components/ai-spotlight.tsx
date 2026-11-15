import { Reveal } from "@/components/reveal";
import type { AiSystem } from "@/types/project";

/** Puts a project's model, retrieval, and evaluation work directly under the case-study hero. */
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

      {system.results && (
        <div className="ai-results" data-reveal-group="">
          {system.results.map((table) => (
            <figure key={table.title} className="ai-table">
              <figcaption><strong>{table.title}</strong><span>{table.caption}</span></figcaption>
              <div className="ai-table-scroll" tabIndex={0} role="group" aria-label={`${table.title} results table`}>
                <table>
                  <thead><tr><th scope="col">Model setup</th>{table.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.label} className={row.deployed ? "is-deployed" : undefined}>
                        <th scope="row">{row.label}{row.deployed && <span className="deployed-tag">In the app</span>}</th>
                        {row.values.map((value, index) => <td key={table.columns[index]}>{value}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </figure>
          ))}
          {system.resultsNote && <p className="ai-results-note">{system.resultsNote}</p>}
        </div>
      )}

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
