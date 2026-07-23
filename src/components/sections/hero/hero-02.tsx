"use client";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Reveal } from "@/components/effects/reveal";

export interface Hero02Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

/**
 * Hero 02 — variante de la famille « hero ».
 * Générique et personnalisable : passez le contenu via les props.
 */
export function Hero02({
  className,
  eyebrow = "hero",
  title = "Hero 02",
  description = "Décrivez ici votre contenu. Ce composant est un point de départ premium à personnaliser.",
  children,
  ...props
}: Hero02Props) {
  return (
    <section className={cn("section container-content", className)} {...props}>
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
