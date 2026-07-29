"use client";

import { Star, Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Reveal } from "@/components/effects/reveal";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export interface Testimonials02Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "La mejor pizza que he comido fuera de Italia. La masa es ligera, aromática y se nota el cuidado del horno en cada bocado.",
    name: "Lucía Fernández",
    role: "Cliente habitual",
    rating: 5,
  },
  {
    quote:
      "Un lugar con alma. El servicio es cálido, la sala es acogedora y la Tartufo es simplemente memorable.",
    name: "Andrés Molina",
    role: "Crítico gastronómico",
    rating: 5,
  },
  {
    quote:
      "Celebramos aquí nuestro aniversario y fue perfecto. Ingredientes frescos, ambiente acogedor y un tiramisú de otro nivel.",
    name: "Carla Ruiz",
    role: "Google Reseñas",
    rating: 5,
  },
  {
    quote:
      "Se respira autenticidad italiana sin caer en lo típico. Reservad con antelación, siempre está lleno y ahora entiendo por qué.",
    name: "Javier Ortega",
    role: "Vecino del barrio",
    rating: 5,
  },
];

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/**
 * Testimonials 02 — avis clients en grille de cartes : citation, note en
 * étoiles, avatar avec initiales, nom et rôle. Sobre et accessible. Idéal
 * restaurant / marque locale / service.
 */
export function Testimonials02({
  className,
  eyebrow = "Opiniones",
  title = "Lo que dicen nuestros comensales",
  description = "Miles de noches compartidas alrededor del fuego. Estas son algunas de las voces que nos hacen seguir amasando.",
  testimonials = DEFAULT_TESTIMONIALS,
  ...props
}: Testimonials02Props) {
  return (
    <section
      className={cn(
        "section bg-primary text-primary-foreground relative overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="container-content relative z-10">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          {eyebrow ? (
            <Reveal>
              <p className="text-sm font-medium tracking-widest text-white/80 uppercase">
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
              <p className="text-lg text-white/80 text-pretty">
                {description}
              </p>
            </Reveal>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * (i % 2)}>
              <figure className="border-border bg-card flex h-full flex-col gap-4 rounded-2xl border p-6 text-neutral-950 shadow-sm sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex" aria-label={`${t.rating ?? 5} de 5`}>
                    {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-amber-500 text-amber-500"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <Quote
                    className="text-primary/25 size-8"
                    aria-hidden
                  />
                </div>
                <blockquote className="text-lg text-neutral-900 text-pretty">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {initials(t.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-neutral-950">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
