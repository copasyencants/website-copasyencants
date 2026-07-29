import {
  Gauge,
  ShieldCheck,
  Sparkles,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Features01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  features?: Feature[];
}

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: Gauge,
    title: "Ultra rapide",
    description: "Des performances optimisées pour un chargement instantané.",
  },
  {
    icon: ShieldCheck,
    title: "Fiable et sécurisé",
    description: "Une base robuste, testée et prête pour la production.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Une expérience impeccable sur tous les écrans.",
  },
  {
    icon: Sparkles,
    title: "Sur-mesure",
    description: "Un design entièrement personnalisable selon votre marque.",
  },
];

/**
 * Features 01 — grille de cartes fonctionnalités avec icônes. S'adapte de 1 à
 * 4 colonnes. Idéal pour présenter des atouts produit ou service.
 */
export function Features01({
  className,
  eyebrow = "Fonctionnalités",
  title = "Tout ce qu'il vous faut",
  description = "Une sélection d'atouts clairs, présentés de façon lisible et hiérarchisée.",
  features = DEFAULT_FEATURES,
  ...props
}: Features01Props) {
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.05 * i}>
              <Card className="h-full border-neutral-800 bg-neutral-950 text-white shadow-md transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="flex flex-col gap-3 p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-white text-emerald-700">
                    <feature.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/65 text-pretty">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
