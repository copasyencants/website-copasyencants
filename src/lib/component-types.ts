import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Contrat de props partagé par TOUTES les sections de la bibliothèque.
 * Chaque variante étend ce type pour garantir des conventions identiques :
 * ancre in-page, override de classes, et props DOM natives forwardées.
 */
export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  /** Ancre pour la navigation interne (#id). */
  id?: string;
  /** Classes fusionnées en dernier (override via cn()). */
  className?: string;
  /** Contenu optionnel injecté par le composeur de page. */
  children?: ReactNode;
}

/** Bloc de contenu éditorial réutilisable (titre de section, etc.). */
export interface SectionHeadingContent {
  eyebrow?: string;
  title: string;
  description?: string;
}
