import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
  const routes = ["", "/about", "/resume", ...projects.map((project) => `/work/${project.slug}`)];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
