/**
 * Gabarits de fichiers pour le générateur de composants.
 * Chaque composant généré respecte EXACTEMENT les mêmes conventions :
 * TypeScript, props typées (extends SectionProps), tokens/Tailwind, Motion
 * cohérent (Reveal), accessibilité et responsive.
 */
import { toPascalCase, toTitle } from "./lib";

const TODAY = new Date().toISOString().slice(0, 10);

export function componentTemplate(family: string, id: string): string {
  const Comp = toPascalCase(id);
  const title = toTitle(id);
  return `"use client";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Reveal } from "@/components/effects/reveal";

export interface ${Comp}Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

/**
 * ${title} — variante de la famille « ${family} ».
 * Générique et personnalisable : passez le contenu via les props.
 */
export function ${Comp}({
  className,
  eyebrow = "${family}",
  title = "${title}",
  description = "Décrivez ici votre contenu. Ce composant est un point de départ premium à personnaliser.",
  children,
  ...props
}: ${Comp}Props) {
  return (
    <section
      className={cn("section container-content", className)}
      {...props}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        {eyebrow ? (
          <Reveal>
            <p className="text-brand text-sm font-medium tracking-widest uppercase">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <h2 className="text-h2 font-heading font-semibold text-balance">
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg text-pretty">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.15} className="w-full">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
`;
}

export function metaTemplate(family: string, id: string): string {
  const name = toTitle(id);
  return `import type { ComponentMeta } from "@/registry/types";

/**
 * Métadonnées de recherche. Renseignez tags et useCases avec soin :
 * c'est ce qui permet de retrouver et réutiliser cette variante plus tard.
 */
const meta: ComponentMeta = {
  family: "${family}",
  id: "${id}",
  name: "${name}",
  description: "À compléter : décrivez le layout et l'intention.",
  tags: [],
  useCases: [],
  responsive: true,
  animated: true,
  dependencies: [],
  status: "draft",
  createdAt: "${TODAY}",
};

export default meta;
`;
}

export function storyTemplate(
  family: string,
  id: string,
  familyName: string,
): string {
  const Comp = toPascalCase(id);
  const title = toTitle(id);
  return `import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ${Comp} } from "./${id}";

const meta = {
  title: "Sections/${familyName}/${title}",
  component: ${Comp},
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof ${Comp}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;
}

export function readmeEntry(id: string, description = "À compléter."): string {
  const name = toTitle(id);
  return `### ${name}

${description}

- **Fichier** : \`${id}.tsx\`
- **Import** : \`import { ${toPascalCase(id)} } from "@/components/sections/...";\`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —
`;
}
