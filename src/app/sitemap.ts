import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Static routes for the sitemap. Add an entry per public page.
 * For dynamic routes, map over your data source and push more entries.
 */
const routes = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
