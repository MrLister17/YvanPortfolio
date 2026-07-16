export type ProjectCategory =
  | "AI"
  | "Machine Learning"
  | "Web"
  | "Mobile"
  | "Data"
  | "Research"
  | "Automation";

export type ProjectStatus = "Completed" | "In Progress" | "Academic Project" | "Prototype";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  positioningStatement: string;
  categories: ProjectCategory[];
  featured: boolean;
  status: ProjectStatus;
  role?: string;
  contributionSummary?: string;
  detailVerified?: boolean;
  timeframe?: string;
  technologies: string[];
  gallery: ProjectImage[];
  problem: string;
  users: string;
  constraints: string[];
  contribution?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  embedUrl?: string;
  visualType?: "game";
  approach: string[];
  keyFeatures: { title: string; description: string }[];
  architecture: ArchitectureNode[];
  outcomes: string[];
  lessons: string[];
  challenges: { challenge: string; response: string }[];
  visibilityNote?: string;
  seo: { title: string; description: string };
};
