import Link from "next/link";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface Pricing01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  plans?: PricingPlan[];
}

const DEFAULT_PLANS: PricingPlan[] = [
  {
    name: "Essentiel",
    price: "19€",
    period: "/mois",
    description: "Pour démarrer sereinement.",
    features: ["1 projet", "Support par email", "Mises à jour incluses"],
    cta: { label: "Choisir", href: "#" },
  },
  {
    name: "Pro",
    price: "49€",
    period: "/mois",
    description: "Pour les équipes qui accélèrent.",
    features: ["Projets illimités", "Support prioritaire", "Analytics avancés"],
    cta: { label: "Choisir", href: "#" },
    featured: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    description: "Pour les besoins spécifiques.",
    features: ["SLA dédié", "Accompagnement", "Sécurité renforcée"],
    cta: { label: "Nous contacter", href: "#" },
  },
];

/**
 * Pricing 01 — trois offres en cartes, avec mise en avant de l'offre
 * recommandée. Convient au SaaS, aux services et aux abonnements.
 */
export function Pricing01({
  className,
  eyebrow = "Tarifs",
  title = "Une offre pour chaque besoin",
  description = "Des tarifs simples et transparents. Changez d'offre à tout moment.",
  plans = DEFAULT_PLANS,
  ...props
}: Pricing01Props) {
  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
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
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={0.05 * i} className="h-full">
            <Card
              className={cn(
                "relative flex h-full flex-col",
                plan.featured && "border-brand ring-brand/30 shadow-lg ring-1",
              )}
            >
              {plan.featured ? (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Recommandé
                </Badge>
              ) : null}
              <CardHeader>
                <CardTitle className="font-heading">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="mt-2">
                  <span className="text-h3 font-heading font-semibold">
                    {plan.price}
                  </span>
                  {plan.period ? (
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  ) : null}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check
                        className="text-brand size-4 shrink-0"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
