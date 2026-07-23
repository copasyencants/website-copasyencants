/**
 * Utilitaires partagés par les scripts de la bibliothèque (générateur,
 * build-registry, scaffold). Exécutés via `tsx`.
 */
import { fileURLToPath } from "node:url";
import path from "node:path";

export const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
export const SECTIONS_DIR = path.join(ROOT, "src", "components", "sections");
export const REGISTRY_JSON = path.join(
  ROOT,
  "src",
  "registry",
  "registry.json",
);

/** "hero-01" -> "Hero01" (nom de composant/fonction). */
export function toPascalCase(id: string): string {
  return id
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

/** "hero-01" -> "Hero 01" (nom lisible). */
export function toTitle(id: string): string {
  return id
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

/** Numéro de variante suivant pour une famille, formaté sur 2 chiffres. */
export function nextVariantId(family: string, existing: string[]): string {
  const nums = existing
    .map((id) => id.match(/-(\d+)$/)?.[1])
    .filter((n): n is string => Boolean(n))
    .map((n) => parseInt(n, 10));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return `${family}-${String(next).padStart(2, "0")}`;
}
