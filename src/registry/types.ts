import type { SectionFamily } from "@/registry/families";

/**
 * Métadonnées d'un composant de la bibliothèque.
 *
 * Chaque variante possède un fichier `<id>.meta.ts` exportant un objet de ce
 * type par défaut. Le script `build-registry` les agrège dans `registry.json`,
 * ce qui rend toutes les variantes cherchables (par famille, tag, cas d'usage)
 * — c'est ce qui permet de « toujours chercher avant de créer ».
 *
 * Données pures uniquement (pas de React) : ce type est lu par les scripts.
 */
export interface ComponentMeta {
  /** Famille (dossier). */
  family: SectionFamily;
  /** Identifiant unique et nom de fichier, ex. "hero-01". */
  id: string;
  /** Nom lisible, ex. "Hero 01". */
  name: string;
  /** Description courte : layout + intention. */
  description: string;
  /** Mots-clés de recherche : style, structure, contenu. */
  tags: string[];
  /** Types de sites adaptés, ex. ["restaurant", "luxe"]. */
  useCases: string[];
  /** Adapté mobile → desktop. */
  responsive: boolean;
  /** Contient des animations Motion. */
  animated: boolean;
  /** Dépendances externes en plus du cœur (ex. ["react-hook-form"]). */
  dependencies: string[];
  /** Maturité de la variante. */
  status: "stable" | "beta" | "draft";
  /** Date d'ajout (ISO), utile pour trier les nouveautés. */
  createdAt: string;
}

/** Entrée telle que stockée dans registry.json (identique à ComponentMeta). */
export type RegistryEntry = ComponentMeta;
