// Mirrors public/documents/resume/Ramirez-Resume.pdf. Update both together.

export const profile =
  "Research Analyst in AI Development & Automation at UL Solutions, specializing in AI-assisted research applications and workflow automation. BS Computer Science graduate with a Machine Learning specialization and hands-on experience in full-stack development, source traceability, and human-reviewed AI workflows.";

export const experience = [
  {
    role: "Research Analyst",
    organization: "AI Development & Automation, UL Solutions",
    period: "Oct 2026 – Present",
    points: [
      "Develop AI-assisted research applications and workbook automation tools for regulatory research and data preparation.",
      "Translate researcher requirements into application features, validation checks, and traceable review workflows.",
    ],
  },
  {
    role: "AI Intern",
    organization: "GMA Research Team, UL Solutions",
    period: "Jun 2026 – Sep 2026",
    points: [
      "Mapped Chem-Envi workflows into requirements for the GMA Research Assistant and workbook automation tools; refined prototypes through researcher feedback, testing, and documentation.",
      "Built Finder, Currency Checker, and Orchestrator agents in Microsoft Copilot Studio to retrieve regulatory sources, check currentness, and flag conflicting findings for human review.",
    ],
  },
  {
    role: "Student Assistant",
    organization: "Marketing and Admissions Office, Mapúa MCL",
    period: "Nov 2024 – Jan 2025",
    points: ["Supported school recruitment and coordinated promotional inventory for events and recruitment caravans."],
  },
  {
    role: "Student Assistant",
    organization: "Information Technology Services Office, Mapúa MCL",
    period: "May 2024 – Sep 2024",
    points: ["Produced and quality-checked student IDs and provided first-level hardware and software support."],
  },
];

export const skillGroups = [
  { title: "AI and evaluation", items: ["RAG", "LLM prototyping", "Gemini/Ollama integrations", "Source grounding", "Hugging Face", "FAISS", "sentence-transformers", "ROUGE-L", "Semantic similarity", "RAGAS-style evaluation"] },
  { title: "Development", items: ["Python", "FastAPI", "JavaScript/TypeScript", "React", "Next.js", "Vite", "Kotlin", "Jetpack Compose", "REST APIs", "SQL"] },
  { title: "Data and cloud", items: ["PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "Firebase", "Supabase", "AWS", "Docker", "openpyxl"] },
  { title: "Delivery", items: ["Git/GitHub", "Pytest", "CI", "Linting", "Type checks", "Regression testing", "Browser QA", "Technical documentation"] },
  { title: "Microsoft", items: ["Power Automate", "Excel", "Office Scripts", "Copilot Studio", "OneDrive for Business", "Teams", "Word", "PowerPoint", "Working knowledge of Power Query and SharePoint"] },
  { title: "AI coding tools", items: ["Claude Code (Fitness Buddy)", "Codex and GitHub Copilot (GMA Research Assistant)"] },
];

export const certificationNames = ["AWS Academy Graduate: Cloud Foundations", "CompTIA Tech+", "Google Foundations of Project Management", "Amazon Full Stack Web Development"];

export const leadership = {
  role: "CCIS Student Council Treasurer",
  detail: "Managed and audited a budget exceeding PHP 250,000 and coordinated campus initiatives with university offices and external partners.",
};
