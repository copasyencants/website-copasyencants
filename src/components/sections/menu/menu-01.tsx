"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";
import { Link } from "@/i18n/navigation";

export interface MenuItem {
  name: string;
  subtitle?: string;
  description: string;
  price: string;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Menu01Action {
  label: string;
  href: string;
}

export interface Menu01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: MenuItem[];
  categories?: MenuCategory[];
  cta?: Menu01Action | null;
}

const DEFAULT_ITEMS: MenuItem[] = [
  {
    name: "Margherita D.O.P.",
    subtitle: "La clásica napolitana",
    description:
      "Tomate San Marzano, mozzarella fior di latte, albahaca fresca y aceite de oliva virgen extra.",
    price: "9.50€",
    imageSrc:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pizza Margherita con albahaca fresca",
    tag: "Icónica",
  },
  {
    name: "Diavola",
    subtitle: "Para los amantes del picante",
    description:
      "Salame picante, tomate San Marzano, mozzarella y un toque de miel de romero.",
    price: "11.00€",
    imageSrc:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pizza Diavola con salame picante",
  },
  {
    name: "Tartufo & Funghi",
    subtitle: "Nuestra firma",
    description:
      "Crema de trufa negra, champiñones portobello, mozzarella y escamas de parmesano.",
    price: "15.50€",
    imageSrc:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pizza con trufa y champiñones",
    tag: "Chef",
  },
  {
    name: "Quattro Formaggi",
    subtitle: "Cremosa e intensa",
    description:
      "Mozzarella, gorgonzola D.O.P., pecorino y provolone ahumado sobre base blanca.",
    price: "16.00€",
    imageSrc:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pizza Quattro Formaggi",
  },
  {
    name: "Prosciutto & Rúcula",
    subtitle: "Fresca y ligera",
    description:
      "Jamón de Parma 18 meses, rúcula silvestre, parmesano y tomates cherry confitados.",
    price: "14.50€",
    imageSrc:
      "https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pizza con jamón de Parma y rúcula",
  },
  {
    name: "Ortolana",
    subtitle: "Huerta de temporada",
    description:
      "Verduras asadas al horno, mozzarella, pesto de albahaca y aceite de oliva.",
    price: "13.00€",
    imageSrc:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pizza Ortolana de verduras",
    tag: "Vegetariana",
  },
];

/**
 * Menu 01 — carte mise en avant en grille de cartes photo : nom, sous-titre
 * italique, description, prix et badge signature. CTA vers la carte complète.
 * Idéal restaurant / pizzeria / café.
 */
export function Menu01({
  className,
  eyebrow = "Nuestra carta",
  title = "Las pizzas que nos definen",
  description = "Una selección de nuestras creaciones más queridas, horneadas al momento y servidas en sala o terraza. La carta completa te espera en la mesa.",
  items = DEFAULT_ITEMS,
  categories,
  cta = { label: "Ver la carta completa", href: "/carta" },
  ...props
}: Menu01Props) {
  const displayCategories = categories || (items && items.length > 0 ? [{ name: "", items }] : []);

  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
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
      </div>

      {displayCategories.map((category, catIndex) => (
        <div key={category.name || catIndex}>
          {category.name ? (
            <Reveal>
              <h3 className="text-h3 mb-8 font-heading font-semibold">
                {category.name}
              </h3>
            </Reveal>
          ) : null}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {category.items.map((item, i) => (
              <Reveal key={item.name} delay={0.05 * (i % 3)}>
                <article className="group border-border/80 bg-card flex h-full flex-col overflow-hidden rounded-2xl border text-neutral-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {item.imageSrc ? (
                    <div className="bg-muted relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {item.tag ? (
                        <Badge className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-full px-3 py-1">
                          {item.tag}
                        </Badge>
                      ) : null}
                      <span className="absolute right-3 bottom-3 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
                        {item.price}
                      </span>
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-xl font-semibold">
                        {item.name}
                      </h3>
                      {!item.imageSrc ? (
                        <span className="text-sm font-semibold whitespace-nowrap text-neutral-600">
                          {item.price}
                        </span>
                      ) : null}
                    </div>
                    {item.subtitle ? (
                      <p className="text-primary text-sm font-medium italic">
                        {item.subtitle}
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm text-neutral-600 text-pretty">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      ))}

      {cta ? (
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="h-11 px-6">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
