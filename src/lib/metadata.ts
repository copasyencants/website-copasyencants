import type { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

const OG_LOCALES: Record<string, string> = {
  es: "es_ES",
  en: "en_US",
  ca: "ca_ES",
};

/** Builds a path prefixed for the given locale ("as-needed": es has no prefix). */
function localizedPath(locale: string, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}`;
}

/**
 * Build a full Metadata object (title, description, Open Graph, Twitter cards)
 * from the site config. Call per-page to override title/description/image.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "",
  locale = routing.defaultLocale,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  locale?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${description}`;

  const canonicalUrl = absoluteUrl(localizedPath(locale, path));

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    keywords: [...siteConfig.keywords],
    authors: [...siteConfig.authors],
    creator: siteConfig.creator,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, absoluteUrl(localizedPath(l, path))]),
        ),
        "x-default": absoluteUrl(path),
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale] ?? siteConfig.locale,
      url: canonicalUrl,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
          },
        },
    icons: { icon: "/favicon.ico" },
  };
}
