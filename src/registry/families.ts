/**
 * SOURCE UNIQUE DE VÉRITÉ — familles de sections.
 *
 * Ce fichier est importé par l'application ET par les scripts Node
 * (générateur, build du registry). Il ne doit contenir que des données pures
 * (aucun import React / Next).
 *
 * Pour ajouter une nouvelle famille : ajouter une entrée ici, puis lancer
 * `npm run scaffold` pour créer son dossier (index.ts + README.md).
 */

export interface SectionFamilyDef {
  /** Slug technique = nom du dossier (kebab-case). */
  slug: string;
  /** Nom lisible. */
  name: string;
  /** Rôle de la famille dans une page. */
  description: string;
}

export const SECTION_FAMILIES = [
  {
    slug: "navbar",
    name: "Navbar",
    description: "Barres de navigation et en-têtes de site.",
  },
  {
    slug: "hero",
    name: "Hero",
    description: "Sections d'accroche en haut de page.",
  },
  {
    slug: "logos",
    name: "Logos",
    description: "Bandeaux de logos clients / partenaires.",
  },
  {
    slug: "features",
    name: "Features",
    description: "Mise en avant de fonctionnalités ou atouts.",
  },
  {
    slug: "services",
    name: "Services",
    description: "Présentation de prestations ou offres.",
  },
  {
    slug: "stats",
    name: "Stats",
    description: "Chiffres clés et indicateurs.",
  },
  {
    slug: "gallery",
    name: "Gallery",
    description: "Galeries d'images et portfolios visuels.",
  },
  {
    slug: "testimonials",
    name: "Testimonials",
    description: "Avis et témoignages clients.",
  },
  {
    slug: "pricing",
    name: "Pricing",
    description: "Grilles et tableaux de tarifs.",
  },
  { slug: "team", name: "Team", description: "Présentation de l'équipe." },
  {
    slug: "timeline",
    name: "Timeline",
    description: "Frises chronologiques et étapes.",
  },
  { slug: "faq", name: "FAQ", description: "Questions fréquentes." },
  { slug: "cta", name: "CTA", description: "Appels à l'action." },
  {
    slug: "contact",
    name: "Contact",
    description: "Sections et formulaires de contact.",
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    description: "Inscription à une newsletter.",
  },
  { slug: "blog", name: "Blog", description: "Listes et aperçus d'articles." },
  {
    slug: "menu",
    name: "Menu",
    description: "Cartes et menus (restaurant, café…).",
  },
  {
    slug: "reservation",
    name: "Reservation",
    description: "Réservation et prise de rendez-vous.",
  },
  { slug: "events", name: "Events", description: "Événements et agendas." },
  { slug: "map", name: "Map", description: "Localisation et cartes." },
  {
    slug: "instagram",
    name: "Instagram",
    description: "Feeds et grilles réseaux sociaux.",
  },
  { slug: "footer", name: "Footer", description: "Pieds de page." },
] as const satisfies readonly SectionFamilyDef[];

export type SectionFamily = (typeof SECTION_FAMILIES)[number]["slug"];

export const FAMILY_SLUGS = SECTION_FAMILIES.map((f) => f.slug);

export function getFamily(slug: string): SectionFamilyDef | undefined {
  return SECTION_FAMILIES.find((f) => f.slug === slug);
}

export function isFamily(slug: string): slug is SectionFamily {
  return FAMILY_SLUGS.includes(slug as SectionFamily);
}
