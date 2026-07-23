/**
 * Central site configuration.
 * Edit these values per project - they drive SEO metadata, Open Graph,
 * Twitter cards, robots.txt and sitemap.xml.
 */
export const siteConfig = {
  name: "Copas y Encants",
  shortName: "Copas y Encants",
  description:
    "Restaurante pizzeria en Sant Marti, Barcelona, con servicio en sala, venta para llevar, reservas online y ambiente cercano.",
  // No trailing slash. Set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/opengraph-image.png",
  locale: "es_ES",
  themeColor: "#f4ede0",
  themeColorDark: "#2a211b",
  twitter: "@copasyencants",
  keywords: [
    "Copas y Encants",
    "pizzeria Barcelona",
    "restaurante Sant Marti",
    "Carrer de Bilbao",
    "venta para llevar",
    "reservas Barcelona",
    "pizza",
  ],
  authors: [{ name: "Copas y Encants" }],
  creator: "Copas y Encants",
} as const;

export type SiteConfig = typeof siteConfig;
