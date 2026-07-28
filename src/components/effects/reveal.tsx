"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Délai avant l'apparition (secondes). */
  delay?: number;
  /** Décalage vertical initial (px). */
  y?: number;
}

/**
 * Apparition douce au scroll, jouée une seule fois. Respecte
 * prefers-reduced-motion. Utilisé par tous les composants de sections pour
 * garantir des animations cohérentes dans toute la bibliothèque.
 */
export function Reveal({
  delay = 0,
  y = 12,
  className,
  children,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const mounted = useMounted();

  // Le SSR et le PREMIER rendu client passent toujours par la branche motion
  // ci-dessous (mounted=false) : rendus identiques, aucun décalage d'hydratation.
  // Une fois monté, si l'utilisateur préfère un mouvement réduit, on rend un
  // simple <div> sans animation ni état masqué : le contenu est toujours visible,
  // indépendamment du comportement de `motion` en mouvement réduit.
  if (mounted && reduce) {
    return (
      <div
        className={cn(className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children as ReactNode}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn("transform-gpu", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
