import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/resume", ...projects.map((project) => `/work/${project.slug}`)];
  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
