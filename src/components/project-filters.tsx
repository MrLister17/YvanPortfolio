"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import type { ProjectCategory } from "@/types/project";

export function ProjectFilters() {
  const reduceMotion = useReducedMotion();
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories)))], []);
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const results = projects.filter((project) => {
    const matchesCategory = category === "All" || project.categories.includes(category as ProjectCategory);
    const haystack = `${project.title} ${project.shortDescription} ${project.technologies.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  });

  const reset = () => { setCategory("All"); setQuery(""); };

  return (
    <div className="project-browser">
      <div className="filter-bar">
        <fieldset className="filter-tabs">
          <legend className="sr-only">Filter projects by category</legend>
          {categories.map((item) => (
            <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </fieldset>
        <div className="project-search"><Search size={17} aria-hidden="true" /><label className="sr-only" htmlFor="project-search-input">Search projects</label><input id="project-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={15} /></button>}</div>
      </div>
      <h2 id="project-results-heading" className="sr-only">Project results</h2>
      <p className="result-count" role="status" aria-live="polite">Showing {results.length} {results.length === 1 ? "project" : "projects"}</p>
      {results.length ? (
        <motion.div layout={!reduceMotion} className="project-grid project-grid-browser" aria-labelledby="project-results-heading">
          <AnimatePresence mode="popLayout" initial={false}>
            {results.map((project, index) => (
              <motion.div key={project.slug} layout={!reduceMotion} initial={false} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
                <ProjectCard project={project} variant="row" index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="empty-state"><span className="eyebrow">No match found</span><h2>Try a broader search.</h2><p>There are no projects matching this category and search term.</p><button className="button button-secondary" onClick={reset}>Reset filters</button></div>
      )}
    </div>
  );
}
