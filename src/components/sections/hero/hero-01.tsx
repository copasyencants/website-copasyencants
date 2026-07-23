"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";
import { DotPattern } from "@/components/ui/dot-pattern";

export interface Hero01Action {
  label: string;
  href: string;
}

export interface Hero01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: Hero01Action;
  secondary?: Hero01Action;
}

/**
 * Hero 01 — accroche centrée avec fond en pointillés, badge, titre large et
 * double appel à l'action. Polyvalent : SaaS, agence, portfolio, startup.
 */
export function Hero01({
  className,
  eyebrow = "Nouveau",
  title = "Un titre qui capte l'attention en une phrase",
  description = "Une sous-accroche claire qui explique la valeur et invite à passer à l'action.",
  primary = { label: "Commencer", href: "#" },
  secondary = { label: "En savoir plus", href: "#" },
  children,
  ...props
}: Hero01Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "section container-content",
        className,
      )}
      {...props}
    >
      <DotPattern
        className={cn(
          "text-border/70",
          "[mask-image:radial-gradient(60%_50%_at_50%_40%,white,transparent)]",
        )}
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {eyebrow ? (
          <Reveal>
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              {eyebrow}
            </Badge>
          </Reveal>
        ) : null}

        <Reveal delay={0.05}>
          <h1 className="text-display font-heading font-semibold text-balance">
            {title}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-2xl text-lg text-pretty sm:text-xl">
              {description}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={0.15}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primary.href}>
                {primary.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </Reveal>

        {children ? (
          <Reveal delay={0.2} className="w-full">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
