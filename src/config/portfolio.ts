export const portfolioConfig = {
  name: "Lester Yvan P. Ramirez",
  shortName: "Yvan Ramirez",
  initials: "LYR",
  headline: "Applied AI, Research Automation & Full-Stack Development",
  supportingHeadline:
    "Building practical AI-assisted tools, machine-learning applications, and thoughtful digital experiences.",
  program: "Bachelor of Science in Computer Science",
  specialization: "Machine Learning",
  school: "Mapúa Malayan Colleges Laguna",
  academicLevel: "Graduate, Class of 2026",
  graduation: "July 2026",
  email: "yvanmain28@gmail.com",
  githubUrl: "https://github.com/MrLister17",
  linkedInUrl: "https://www.linkedin.com/in/lester-yvan-ramirez-353b44293/",
  // The ?v= stamp makes browsers fetch the new file instead of a cached older résumé. Bump it when the PDF changes.
  resumeUrl: "/documents/resume/Ramirez-Resume.pdf?v=2026-11",
  currentRole: {
    title: "Research Analyst",
    team: "AI Development & Automation",
    company: "UL Solutions",
    period: "Oct 2026 – Present",
  },
  practicum: {
    company: "UL Solutions",
    startDate: "June 8, 2026",
    endDate: "August 15, 2026",
    totalHours: 480,
    setup: "On-site",
  },
  careerDirections: [
    "Applied AI Engineer",
    "Machine Learning Engineer",
    "AI and LLM Application Developer",
    "Full-Stack Developer",
    "Data and Automation Engineer",
  ],
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
] as const;

export const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
