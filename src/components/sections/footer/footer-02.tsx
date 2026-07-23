"use client";

import Link from "next/link";
import { Flame, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Reveal } from "@/components/effects/reveal";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface Footer02Props extends SectionProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
  address?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Explora",
    links: [
      { label: "Especialidades", href: "#especialidades" },
      { label: "Carta", href: "#carta" },
      { label: "Galería", href: "#galeria" },
      { label: "Historia", href: "#historia" },
    ],
  },
  {
    title: "Visítanos",
    links: [
      { label: "Reservar mesa", href: "#contacto" },
      { label: "Horario", href: "#contacto" },
      { label: "Cómo llegar", href: "#contacto" },
      { label: "Eventos privados", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

/**
 * Footer 02 — pied de page riche : marque, baseline, colonnes de liens,
 * réseaux sociaux et barre inférieure (copyright). Sombre et chaleureux,
 * cohérent avec les tokens. Idéal restaurant / marque.
 */
export function Footer02({
  className,
  brand = "Copas y Encants",
  tagline = "Restaurante pizzeria en Sant Marti, Barcelona, con servicio en sala, venta para llevar y reservas online.",
  columns = DEFAULT_COLUMNS,
  address = "Carrer de Bilbao, 18-22, Sant Marti, 08005 Barcelona",
  ...props
}: Footer02Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-foreground text-background/85 mt-auto", className)}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      <div className="container-content section-sm">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full">
                  <Flame className="size-5" aria-hidden />
                </span>
                <span className="font-heading text-background text-xl font-semibold">
                  {brand}
                </span>
              </div>
              <p className="text-background/70 max-w-sm text-sm text-pretty">
                {tagline}
              </p>
              <p className="text-background/60 flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                {address}
              </p>
              <div className="mt-1 flex gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="border-background/20 text-background/80 hover:bg-primary hover:border-primary hover:text-primary-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
                >
                  <FaInstagram className="size-5" aria-hidden />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="border-background/20 text-background/80 hover:bg-primary hover:border-primary hover:text-primary-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
                >
                  <FaFacebookF className="size-5" aria-hidden />
                </a>
              </div>
            </div>

            {columns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-3">
                <p className="text-background font-heading text-sm font-semibold tracking-wide">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Reveal>

        <div className="border-background/15 mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm sm:flex-row">
          <p className="text-background/60">
            © {year} {brand}. Todos los derechos reservados.
          </p>
          <p className="text-background/50">Hecho en Sant Marti, Barcelona.</p>
        </div>
      </div>
    </footer>
  );
}
