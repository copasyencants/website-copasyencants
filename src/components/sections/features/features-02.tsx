"use client";

import Image from "next/image";
import { Check, Leaf } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Reveal } from "@/components/effects/reveal";

export interface Features02Highlight {
  value: string;
  label: string;
}

export interface Features02Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  points?: string[];
  imageSrc?: string;
  imageAlt?: string;
  badge?: Features02Highlight;
}

const DEFAULT_POINTS: string[] = [
  "Masa madre viva, madurada lentamente durante 48 horas",
  "Harinas italianas y tomate San Marzano D.O.P.",
  "Mozzarella fior di latte y albahaca fresca cada mañana",
  "Cocción al momento en horno de leña a 485°",
];

/**
 * Features 02 — présentation éditoriale en deux colonnes : image immersive avec
 * carte de statistique flottante, et bloc texte (titre serif, paragraphe,
 * liste de points cochés). Idéal « à propos » / savoir-faire.
 */
export function Features02({
  className,
  eyebrow = "Nuestra esencia",
  title = "Artesanía italiana en cada bocado",
  description = "En Copas y Encants creemos que una gran mesa empieza por producto cuidado, servicio cercano y un ambiente pensado para disfrutar sin prisas.",
  points = DEFAULT_POINTS,
  imageSrc = "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Pizzaiolo trabajando la masa a mano",
  badge = { value: "100%", label: "Ingredientes frescos de temporada" },
  ...props
}: Features02Props) {
  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="border-border bg-muted relative aspect-[4/5] overflow-hidden rounded-3xl border shadow-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
          {badge ? (
            <div className="bg-card border-border absolute -right-2 -bottom-6 max-w-[15rem] rounded-2xl border p-5 shadow-xl sm:right-6">
              <div className="flex items-center gap-3">
                <span className="bg-accent/15 text-accent flex size-11 shrink-0 items-center justify-center rounded-full">
                  <Leaf className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-2xl leading-none font-semibold">
                    {badge.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs text-pretty">
                    {badge.label}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </Reveal>

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
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg text-pretty">
              {description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-1 flex flex-col gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-foreground/90 text-pretty">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
