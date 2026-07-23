/**
 * Générateur de composants de la bibliothèque.
 *
 *   npm run component <famille> [id]
 *   ex. npm run component hero hero-04
 *   ex. npm run component pricing        (id auto-incrémenté : pricing-01…)
 *
 * Crée : le composant, sa story Storybook, son fichier meta, met à jour le
 * barrel (index.ts) et le README, puis régénère le registry.
 * Ne remplace JAMAIS une variante existante (aucune régression).
 */
import { readFile, writeFile, readdir, mkdir, access } from "node:fs/promises";
import path from "node:path";

import { SECTIONS_DIR, nextVariantId } from "./lib";
import {
  componentTemplate,
  metaTemplate,
  storyTemplate,
  readmeEntry,
} from "./templates";
import { getFamily, isFamily, FAMILY_SLUGS } from "../src/registry/families";
import { buildRegistry } from "./build-registry";

async function exists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function updateBarrel(dir: string, id: string) {
  const indexPath = path.join(dir, "index.ts");
  let content = (await exists(indexPath))
    ? await readFile(indexPath, "utf8")
    : "";
  content = content.replace(/\nexport \{\};\n?$/, "\n");
  const line = `export * from "./${id}";\n`;
  if (!content.includes(line)) content += line;
  await writeFile(indexPath, content, "utf8");
}

async function updateReadme(dir: string, id: string) {
  const readmePath = path.join(dir, "README.md");
  if (!(await exists(readmePath))) return;
  let readme = await readFile(readmePath, "utf8");
  const entry = readmeEntry(id) + "\n";
  const placeholder = /_Aucune variante[\s\S]*?```\n/;
  if (placeholder.test(readme)) {
    readme = readme.replace(placeholder, entry.trimStart());
  } else if (readme.includes("## Utilisation")) {
    readme = readme.replace("## Utilisation", `${entry}## Utilisation`);
  } else {
    readme += `\n${entry}`;
  }
  await writeFile(readmePath, readme, "utf8");
}

async function main() {
  const [familyArg, idArg] = process.argv.slice(2);

  if (!familyArg || !isFamily(familyArg)) {
    console.error(
      `✖ Famille invalide.\n  Usage : npm run component <famille> [id]\n  Familles : ${FAMILY_SLUGS.join(", ")}`,
    );
    process.exit(1);
  }

  const familyDef = getFamily(familyArg)!;
  const dir = path.join(SECTIONS_DIR, familyArg);
  await mkdir(dir, { recursive: true });

  const files = (await exists(dir)) ? await readdir(dir) : [];
  const existingIds = files
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"))
    .map((f) => f.replace(/\.tsx$/, ""));

  const id =
    idArg && idArg.trim()
      ? idArg.trim()
      : nextVariantId(familyArg, existingIds);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    console.error(`✖ Id invalide "${id}" (attendu : kebab-case, ex. hero-04).`);
    process.exit(1);
  }

  const componentPath = path.join(dir, `${id}.tsx`);
  if (await exists(componentPath)) {
    console.error(
      `✖ ${id} existe déjà. On n'écrase jamais une variante : choisissez un nouvel id (ex. ${nextVariantId(familyArg, existingIds)}).`,
    );
    process.exit(1);
  }

  await writeFile(componentPath, componentTemplate(familyArg, id), "utf8");
  await writeFile(
    path.join(dir, `${id}.meta.ts`),
    metaTemplate(familyArg, id),
    "utf8",
  );
  await writeFile(
    path.join(dir, `${id}.stories.tsx`),
    storyTemplate(familyArg, id, familyDef.name),
    "utf8",
  );
  await updateBarrel(dir, id);
  await updateReadme(dir, id);
  await buildRegistry();

  console.log(`✓ Créé : ${familyArg}/${id}`);
  console.log(`  - ${id}.tsx`);
  console.log(`  - ${id}.meta.ts   (complétez tags & useCases)`);
  console.log(`  - ${id}.stories.tsx`);
  console.log(`  - index.ts + README.md mis à jour, registry régénéré.`);
}

main();
