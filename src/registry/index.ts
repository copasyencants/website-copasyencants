import registryJson from "@/registry/registry.json";
import { SECTION_FAMILIES, type SectionFamily } from "@/registry/families";
import type { RegistryEntry } from "@/registry/types";

export type { RegistryEntry, ComponentMeta } from "@/registry/types";
export {
  SECTION_FAMILIES,
  type SectionFamily,
  type SectionFamilyDef,
} from "@/registry/families";

/** Toutes les variantes de la bibliothèque (généré par `npm run registry`). */
export const registry = registryJson.components as RegistryEntry[];

/** Date de dernière génération du registry. */
export const registryGeneratedAt = registryJson.generatedAt;

/** Variantes d'une famille donnée, triées par id. */
export function getComponentsByFamily(family: SectionFamily): RegistryEntry[] {
  return registry
    .filter((c) => c.family === family)
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Regroupe les variantes par famille (respecte l'ordre de SECTION_FAMILIES). */
export function getRegistryByFamily(): {
  family: SectionFamily;
  name: string;
  description: string;
  components: RegistryEntry[];
}[] {
  return SECTION_FAMILIES.map((f) => ({
    family: f.slug,
    name: f.name,
    description: f.description,
    components: getComponentsByFamily(f.slug),
  }));
}

/**
 * Recherche full-text simple sur nom, description, tags et cas d'usage.
 * Sert à décider s'il faut réutiliser une variante ou en créer une nouvelle.
 */
export function searchComponents(query: string): RegistryEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return registry;
  const terms = q.split(/\s+/);
  return registry.filter((c) => {
    const haystack = [
      c.id,
      c.name,
      c.description,
      c.family,
      ...c.tags,
      ...c.useCases,
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}

/** Récupère une variante par identifiant. */
export function getComponent(id: string): RegistryEntry | undefined {
  return registry.find((c) => c.id === id);
}
