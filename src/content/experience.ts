// Mirrors public/documents/resume/Ramirez-Resume.pdf. Update both together.

export const experience = [
  {
    role: "AI Intern",
    organization: "GMA Research Team, UL Solutions",
    period: "Jun 2026 – Present",
    current: true,
    points: [
      "Mapped the Chem-Envi regulatory research workflow and converted researcher feedback into requirements for the GMA Research Assistant, a working demonstration for approved knowledge discovery, AI-assisted research, human review, and Excel-ready outputs.",
      "Developed and refined React/TypeScript and Next.js/Vite interfaces with Python/FastAPI services, SQLAlchemy/Alembic, PostgreSQL/pgvector, and REST API integration.",
      "Automated workbook ingestion, validation, versioning, review, and export; added source traceability, audit logging, role-aware workflows, and Docker-based local delivery.",
      "Used Git/GitHub, Pytest, CI, linting, type checks, regression tests, and browser QA; explored Microsoft Copilot Studio and SharePoint-supported agents within governance and access constraints.",
    ],
  },
  {
    role: "Student Assistant",
    organization: "Marketing and Admissions Office, Mapúa MCL",
    period: "Nov 2024 – Jan 2025",
    current: false,
    points: ["Engaged prospective students during school-to-school recruitment and coordinated promotional inventory for large events and recruitment caravans."],
  },
  {
    role: "Student Assistant",
    organization: "Information Technology Services Office, Mapúa MCL",
    period: "May 2024 – Sep 2024",
    current: false,
    points: ["Produced and quality-checked student IDs and provided first-level hardware and software support for daily office operations."],
  },
];

export const skillGroups = [
  { title: "AI and research", items: ["RAG", "LLM prototyping", "Source grounding", "Gemini/Ollama integrations", "Microsoft Copilot Studio", "SharePoint-supported retrieval", "Hugging Face", "ROUGE"] },
  { title: "Development", items: ["Python", "FastAPI", "JavaScript/TypeScript", "React", "Next.js", "Vite", "REST APIs", "SQL", "Firebase"] },
  { title: "Data and cloud", items: ["PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "Supabase", "AWS", "Docker", "Excel/openpyxl"] },
  { title: "Delivery", items: ["Git/GitHub", "Pytest", "CI", "Linting and type checking", "Regression testing", "Browser QA", "Requirements mapping", "Technical documentation"] },
];

export const certificationNames = ["AWS Academy Graduate: Cloud Foundations", "CompTIA Tech+", "Google Foundations of Project Management", "Amazon Full Stack Web Development"];

export const leadership = {
  role: "CCIS Student Council Treasurer",
  detail: "Managed and audited a budget exceeding PHP 250,000 and coordinated campus initiatives with university offices and external partners.",
};
