"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Reveal } from "@/components/effects/reveal";

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Timeline01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  entries?: TimelineEntry[];
  imageSrc?: string;
  imageAlt?: string;
}

const DEFAULT_ENTRIES: TimelineEntry[] = [
  {
    year: "2007",
    title: "Una idea nacida en Nápoles",
    description:
      "Marco Esposito deja su barrio del Vomero con la receta de su abuela y el sueño de un horno propio.",
  },
  {
    year: "2011",
    title: "Se enciende el horno",
    description:
      "Abrimos nuestra primera sala de 20 mesas. El horno se convierte en el corazón del local.",
  },
  {
    year: "2018",
    title: "Del huerto a la mesa",
    description:
      "Sellamos alianzas con productores locales para trabajar solo con ingredientes frescos de temporada.",
  },
  {
    year: "2024",
    title: "Una nueva generación",
    description:
      "Giulia Esposito toma el relevo y renueva la carta sin traicionar el alma napolitana de siempre.",
  },
];

/**
 * Timeline 01 — récit chronologique avec image d'ambiance et frise verticale
 * (année, titre, texte) ponctuée de points sur un rail. Idéal « notre
 * histoire » / parcours de marque.
 */
export function Timeline01({
  className,
  eyebrow = "Nuestra historia",
  title = "Diecisiete años alimentando el fuego",
  description = "De una receta familiar a un rincón de Nápoles en el corazón de la ciudad. Esta es la historia que horneamos cada día.",
  entries = DEFAULT_ENTRIES,
  imageSrc = "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "La historia de Copas y Encants",
  ...props
}: Timeline01Props) {
  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          {eyebrow ? (
            <Reveal>
              <p className="text-primary text-sm font-medium tracking-widest uppercase">
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
          <Reveal delay={0.15} className="mt-2">
            <div className="border-border bg-muted relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ol className="relative lg:translate-y-6 lg:self-center">
          <span
            className="bg-border absolute top-2 bottom-2 left-[11px] w-px"
            aria-hidden
          />
          {entries.map((entry, i) => (
            <Reveal key={entry.year} delay={0.05 * i} className="relative">
              <li className="relative flex gap-5 pb-9 last:pb-0">
                <span className="relative z-10 mt-1 flex size-6 shrink-0 items-center justify-center">
                  <span className="bg-primary ring-background size-3 rounded-full ring-4" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-primary font-heading text-lg font-semibold">
                    {entry.year}
                  </span>
                  <h3 className="font-heading text-xl font-semibold">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty">
                    {entry.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
