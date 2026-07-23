/**
 * Construit src/registry/registry.json en scannant tous les fichiers
 * `*.meta.ts` de la bibliothèque. Aucune édition manuelle du JSON.
 *
 *   npx tsx scripts/build-registry.ts   (ou `npm run registry`)
 */
import { glob } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

import { REGISTRY_JSON, SECTIONS_DIR } from "./lib";
import { FAMILY_SLUGS } from "../src/registry/families";
import type { ComponentMeta } from "../src/registry/types";

export async function buildRegistry(): Promise<ComponentMeta[]> {
  const entries: ComponentMeta[] = [];
  const seen = new Set<string>();
  const errors: string[] = [];

  const pattern = path.join(SECTIONS_DIR, "**/*.meta.ts").replace(/\\/g, "/");
  for await (const file of glob(pattern)) {
    const mod = await import(pathToFileURL(file).href);
    const meta = mod.default as ComponentMeta | undefined;
    if (!meta) {
      errors.push(`Pas d'export par défaut dans ${file}`);
      continue;
    }
    if (!FAMILY_SLUGS.includes(meta.family)) {
      errors.push(`Famille inconnue "${meta.family}" dans ${file}`);
    }
    if (seen.has(meta.id)) {
      errors.push(`Identifiant dupliqué "${meta.id}" (${file})`);
    }
    seen.add(meta.id);
    entries.push(meta);
  }

  if (errors.length) {
    console.error("✖ Registry invalide :\n  - " + errors.join("\n  - "));
    process.exitCode = 1;
  }

  entries.sort((a, b) =>
    a.family === b.family
      ? a.id.localeCompare(b.id)
      : a.family.localeCompare(b.family),
  );

  const payload = {
    generatedAt: new Date().toISOString(),
    count: entries.length,
    components: entries,
  };
  await writeFile(
    REGISTRY_JSON,
    JSON.stringify(payload, null, 2) + "\n",
    "utf8",
  );
  return entries;
}

// Exécution directe (pas seulement import).
if (import.meta.url === pathToFileURL(process.argv[1]!).href) {
  buildRegistry().then((e) =>
    console.log(`✓ Registry généré : ${e.length} composant(s).`),
  );
}
