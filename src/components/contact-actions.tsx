"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioConfig } from "@/config/portfolio";

export function ContactActions() {
  const [status, setStatus] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioConfig.email);
      setStatus("Email copied.");
    } catch {
      setStatus(`Copy unavailable. Email: ${portfolioConfig.email}`);
    }
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="contact-actions">
      <button className="button" onClick={copyEmail}>{status === "Email copied." ? <Check /> : <Copy />} {status === "Email copied." ? "Email copied" : "Copy email"}</button>
      <a className="button button-secondary" href={`mailto:${portfolioConfig.email}?subject=${encodeURIComponent("Portfolio inquiry for Lester Yvan P. Ramirez")}`}><Mail /> Open email client</a>
      <p className={`copy-status ${status ? "copy-status-visible" : ""}`} role="status" aria-live="polite">{status}</p>
    </div>
  );
}
