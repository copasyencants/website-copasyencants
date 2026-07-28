import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

/**
 * Static routes for the sitemap. Add an entry per public page.
 * For dynamic routes, map over your data source and push more entries.
 */
const routes = ["", "/carta"];

function localizedPath(locale: string, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}${localizedPath(locale, route)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [
            l,
            `${siteConfig.url}${localizedPath(l, route)}`,
          ]),
        ),
      },
    })),
  );
}
