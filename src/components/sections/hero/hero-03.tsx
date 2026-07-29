"use client";

import Image from "next/image";
import { ArrowRight, Flame, ShoppingBag, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { Link } from "@/i18n/navigation";

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
  orderActions?: Hero03Action[];
  stats?: Hero03Stat[];
  reviewsLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
}

const DEFAULT_STATS: Hero03Stat[] = [
  { value: "48 h", label: "Masa madurada" },
  { value: "485°", label: "Horno" },
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
  description = "Masa madre madurada 48 horas, ingredientes frescos de temporada y el calor vivo de nuestro horno. Servicio en sala y terraza, alma italiana.",
  primary = { label: "Reservar mesa", href: "#contacto" },
  secondary = { label: "Ver la carta", href: "/carta" },
  orderActions = [],
  stats = DEFAULT_STATS,
  reviewsLabel = "4,8/5 · 146 reseñas",
  imageSrc = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
  imageAlt = "Pizza napolitana recién salida del horno",
  videoSrc = "/videotest.mp4",
  ...props
}: Hero03Props) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[calc(100svh-4rem)] items-start overflow-hidden pt-12 sm:items-center sm:pt-0 md:min-h-[calc(100svh-5rem)]",
        className,
      )}
      {...props}
    >
      {/* Fond vidéo (ou photo si pas de vidéo) + dégradé chaud pour la lisibilité */}
      <div className="bg-foreground absolute inset-0 -z-10">
        {videoSrc ? (
          <video
            className="size-full object-cover object-[62%_center]"
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
            className="hero-image-drift object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/32 to-transparent" />
      </div>

      <div className="container-content w-full py-10 text-white sm:py-18 md:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm backdrop-blur-sm">
              <Flame className="text-primary size-4" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-heading mt-4 max-w-4xl text-[clamp(2.35rem,7vw,5.75rem)] leading-[0.96] font-semibold text-balance drop-shadow-[0_3px_18px_rgba(0,0,0,0.32)] sm:mt-6">
              {titleTop}{" "}
              <span className="text-primary italic">{titleAccent}</span>
              <br />
              {titleBottom}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-white/88 sm:mt-5 sm:text-xl sm:leading-8">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="h-12 px-7 text-base shadow-lg shadow-black/20"
              >
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
              {orderActions.map((action) => (
                <Button
                  key={action.href}
                  asChild
                  variant="outline"
                  className="h-12 border-white/25 bg-black/20 px-5 text-sm text-white backdrop-blur-sm hover:bg-white hover:text-neutral-950 dark:border-white/25 dark:bg-black/20"
                >
                  <a href={action.href} target="_blank" rel="noreferrer">
                    <ShoppingBag className="size-4" />
                    {action.label}
                  </a>
                </Button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 sm:mt-10 sm:gap-x-8 sm:gap-y-4 sm:pt-6">
              <div className="flex items-center gap-2">
                <div className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80">{reviewsLabel}</span>
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
