"use client";

import { ArrowRight, Copy, ExternalLink, Search, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { navigation, portfolioConfig } from "@/config/portfolio";
import { projects } from "@/content/projects";

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
};

export function CommandPalette({ open, onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copyStatus, setCopyStatus] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const copyTimeoutRef = useRef<number | null>(null);
  const commands = useMemo(() => [
    ...navigation.map((item) => ({ label: `Go to ${item.label}`, href: item.href, type: "page" })),
    ...projects.map((project) => ({ label: `Open ${project.title}`, href: `/projects/${project.slug}`, type: "project" })),
  ], []);
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));

  const close = useCallback(() => {
    setQuery("");
    setSelected(0);
    onClose();
  }, [onClose]);

  const navigate = useCallback((href: string) => {
    setQuery("");
    setSelected(0);
    onNavigate(href);
  }, [onNavigate]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => () => {
    if (copyTimeoutRef.current !== null) window.clearTimeout(copyTimeoutRef.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const background = [document.querySelector("main"), document.querySelector("footer"), document.querySelector("header")]
      .filter(Boolean) as HTMLElement[];
    document.body.style.overflow = "hidden";
    background.forEach((element) => { element.inert = true; });
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => { element.inert = false; });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`command-option-${selected}`)?.scrollIntoView({ block: "nearest" });
  }, [open, selected]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      const searchOwnsFocus = document.activeElement === inputRef.current;
      if (searchOwnsFocus && event.key === "ArrowDown") {
        event.preventDefault();
        setSelected((value) => Math.min(value + 1, Math.max(filtered.length - 1, 0)));
      }
      if (searchOwnsFocus && event.key === "ArrowUp") {
        event.preventDefault();
        setSelected((value) => Math.max(value - 1, 0));
      }
      if (searchOwnsFocus && event.key === "Enter" && filtered[selected]) navigate(filtered[selected].href);
      if (event.key === "Tab") {
        const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("input, button:not([disabled]), a[href]") ?? [])
          .filter((element) => element.offsetParent !== null);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, filtered, navigate, open, selected]);

  if (!open) return null;

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) close(); }}>
      <section ref={dialogRef} className="command-dialog" role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="command-search">
          <Search size={18} aria-hidden="true" />
          <input ref={inputRef} role="combobox" aria-expanded="true" aria-controls="command-results" aria-activedescendant={filtered[selected] ? `command-option-${selected}` : undefined} value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} placeholder="Where would you like to go?" aria-label="Search commands" />
          <button ref={closeRef} className="icon-button" onClick={close} aria-label="Close command palette"><X size={18} /></button>
        </div>
        <div id="command-results" className="command-results" role="listbox" aria-label="Available commands">
          {filtered.length ? filtered.map((command, index) => (
            <button
              key={command.href}
              id={`command-option-${index}`}
              role="option"
              aria-selected={index === selected}
              className={index === selected ? "selected" : ""}
              onMouseEnter={() => setSelected(index)}
              onClick={() => navigate(command.href)}
            >
              <span><small>{command.type}</small>{command.label}</span><ArrowRight size={17} aria-hidden="true" />
            </button>
          )) : <p className="command-empty">No matching destination.</p>}
        </div>
        <div className="command-footer">
          <button onClick={async () => {
            try {
              await navigator.clipboard.writeText(portfolioConfig.email);
              setCopyStatus("Email copied.");
            } catch {
              setCopyStatus(`Copy unavailable. Email: ${portfolioConfig.email}`);
            }
            if (copyTimeoutRef.current !== null) window.clearTimeout(copyTimeoutRef.current);
            copyTimeoutRef.current = window.setTimeout(() => setCopyStatus(""), 3000);
          }}><Copy size={14} /> {copyStatus === "Email copied." ? "Email copied" : "Copy email"}</button>
          <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> GitHub</a>
          <a href={portfolioConfig.linkedInUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> LinkedIn</a>
        </div>
        <p className="sr-only" role="status" aria-live="polite">{copyStatus}</p>
      </section>
    </div>
  );
}
