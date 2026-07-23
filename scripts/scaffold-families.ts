/**
 * Crée le dossier de chaque famille déclarée dans SECTION_FAMILIES
 * (index.ts + README.md) s'il n'existe pas encore. Idempotent : ne touche
 * jamais à un fichier existant.
 *
 *   npx tsx scripts/scaffold-families.ts   (ou `npm run scaffold`)
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

import { SECTIONS_DIR } from "./lib";
import { SECTION_FAMILIES } from "../src/registry/families";

async function exists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

function indexTemplate(name: string): string {
  return `// Barrel de la famille « ${name} ».
// Le générateur (npm run component) ajoute automatiquement les variantes ici.
export {};
`;
}

function readmeTemplate(name: string, description: string): string {
  return `# ${name}

${description}

## Variantes

_Aucune variante pour l'instant._ Générez-en une avec :

\`\`\`bash
npm run component ${name.toLowerCase()} ${name.toLowerCase()}-01
\`\`\`

## Utilisation

\`\`\`tsx
import { /* Variante */ } from "@/components/sections/${name.toLowerCase()}";
\`\`\`

## Conventions

- Props typées via \`SectionProps\` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via \`<Reveal>\` (cohérentes, \`prefers-reduced-motion\`).
- Responsive mobile-first.
`;
}

async function main() {
  let created = 0;
  for (const family of SECTION_FAMILIES) {
    const dir = path.join(SECTIONS_DIR, family.slug);
    await mkdir(dir, { recursive: true });

    const indexPath = path.join(dir, "index.ts");
    if (!(await exists(indexPath))) {
      await writeFile(indexPath, indexTemplate(family.name), "utf8");
      created++;
    }
    const readmePath = path.join(dir, "README.md");
    if (!(await exists(readmePath))) {
      await writeFile(
        readmePath,
        readmeTemplate(family.name, family.description),
        "utf8",
      );
      created++;
    }
  }
  console.log(
    `✓ Familles scaffoldées (${SECTION_FAMILIES.length}). ${created} fichier(s) créé(s).`,
  );
}

main();
