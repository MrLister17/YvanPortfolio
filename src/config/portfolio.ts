export const portfolioConfig = {
  name: "Lester Yvan P. Ramirez",
  shortName: "Yvan Ramirez",
  initials: "LYR",
  headline: "AI Intern, Full-Stack Developer & BS Computer Science Graduate",
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
  resumeUrl: "/documents/resume/Ramirez-Resume.pdf",
  currentRole: {
    title: "AI Intern",
    team: "GMA Research Team",
    company: "UL Solutions",
    period: "Jun 2026 – Present",
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
