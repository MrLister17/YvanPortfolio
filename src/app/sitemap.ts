import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/portfolio";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = ["", "/about", "/projects", "/practicum", "/resume", "/contact", "/lab"];
  return [...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" as const : "yearly" as const, priority: route === "" ? 1 : 0.7 })), ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 }))];
}
