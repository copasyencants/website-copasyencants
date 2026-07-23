"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { DotPattern } from "@/components/ui/dot-pattern";

export interface Cta02Action {
  label: string;
  href: string;
}

export interface Cta02Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: Cta02Action;
  secondary?: Cta02Action;
}

/**
 * Cta 02 — bandeau d'appel à l'action premium : carte pleine largeur en
 * couleur de marque, motif discret, titre serif et double action (réserver /
 * appeler). Idéal réservation restaurant.
 */
export function Cta02({
  className,
  eyebrow = "Reserva tu mesa",
  title = "Esta noche, deja que el fuego cocine para ti",
  description = "Las mejores mesas vuelan. Reserva en segundos y vive una velada napolitana junto al horno.",
  primary = { label: "Reservar ahora", href: "#contacto" },
  secondary = { label: "934 67 21 30", href: "tel:+34934672130" },
  ...props
}: Cta02Props) {
  return (
    <section
      className={cn("container-content section-sm", className)}
      {...props}
    >
      <Reveal>
        <div className="bg-primary text-primary-foreground relative isolate overflow-hidden rounded-3xl px-6 py-14 shadow-xl sm:px-12 sm:py-16">
          <DotPattern
            className={cn(
              "text-primary-foreground/15",
              "[mask-image:radial-gradient(70%_70%_at_80%_20%,white,transparent)]",
            )}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase">
              {eyebrow}
            </p>
            <h2 className="font-heading text-h2 font-semibold text-balance">
              {title}
            </h2>
            <p className="text-primary-foreground/85 text-lg text-pretty">
              {description}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="secondary"
                className="h-12 px-7 text-base"
              >
                <Link href={primary.href}>
                  <CalendarCheck className="size-4" />
                  {primary.label}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground dark:border-primary-foreground/40 h-12 bg-transparent px-7 text-base dark:bg-transparent"
              >
                <Link href={secondary.href}>
                  <Phone className="size-4" />
                  {secondary.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
