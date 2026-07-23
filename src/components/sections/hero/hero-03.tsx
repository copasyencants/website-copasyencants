"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Flame } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { placeholderImage } from "@/lib/images";

export interface Hero03Action {
  label: string;
  href: string;
}

export interface Hero03Stat {
  value: string;
  label: string;
}

export interface Hero03Props extends SectionProps {
  eyebrow?: string;
  titleTop?: string;
  titleAccent?: string;
  titleBottom?: string;
  description?: string;
  primary?: Hero03Action;
  secondary?: Hero03Action;
  stats?: Hero03Stat[];
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
}

const DEFAULT_STATS: Hero03Stat[] = [
  { value: "48 h", label: "Masa madurada" },
  { value: "485°", label: "Horno de leña" },
  { value: "2007", label: "Desde" },
];

/**
 * Hero 03 — accroche plein cadre sur photographie, dégradé chaud lisible,
 * marque en serif, double CTA et bandeau de preuves (note, chiffres clés).
 * Ambiance restaurant / feu / artisanat. Fond image via next/image (LCP).
 */
export function Hero03({
  className,
  eyebrow = "Auténtica pizza napolitana",
  titleTop = "El sabor del",
  titleAccent = "fuego",
  titleBottom = "hecho a mano",
  description = "Masa madre madurada 48 horas, ingredientes frescos de temporada y el calor vivo de nuestro horno de leña. Cocina abierta, alma italiana.",
  primary = { label: "Reservar mesa", href: "#contacto" },
  secondary = { label: "Ver la carta", href: "#carta" },
  stats = DEFAULT_STATS,
  imageSrc = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
  imageAlt = "Pizza napolitana recién salida del horno de leña",
  videoSrc = "/videotest.mp4",
  ...props
}: Hero03Props) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[92vh] items-end overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Fond vidéo (ou photo si pas de vidéo) + dégradé chaud pour la lisibilité */}
      <div className="bg-foreground absolute inset-0 -z-10">
        {videoSrc ? (
          <video
            className="size-full object-cover object-center"
            src={videoSrc}
            poster={imageSrc}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
      </div>

      <div className="container-content w-full pt-32 pb-16 text-white md:pb-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="border-white/25 bg-white/10 text-sm font-medium tracking-wide inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm">
              <Flame className="text-primary size-4" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-heading mt-6 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] font-semibold text-balance">
              {titleTop}{" "}
              <span className="text-primary italic">{titleAccent}</span>
              <br />
              {titleBottom}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-lg text-pretty text-white/85 sm:text-xl">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 px-7 text-base">
                <Link href={primary.href}>
                  {primary.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-white/30 bg-white/10 px-7 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white dark:border-white/30 dark:bg-white/10"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7">
              <div className="flex items-center gap-2">
                <div className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  4,9/5 · +1.200 reseñas
                </span>
              </div>
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-heading text-xl font-semibold">
                    {s.value}
                  </span>
                  <span className="text-sm text-white/70">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
