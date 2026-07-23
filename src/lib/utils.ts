import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/lib/site";

/** Merge Tailwind classes safely (clsx + tailwind-merge). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  const suffix = path ? `/${path.replace(/^\//, "")}` : "";
  return `${base}${suffix}`;
}

/** Locale-aware date formatting with sensible defaults. */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
  locale = "fr-FR",
) {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}
