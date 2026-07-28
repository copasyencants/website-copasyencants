"use client";

import Link from "next/link";
import { Flame, MapPin } from "lucide-react";
import { NavLink } from "@/components/ui/nav-link";

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

export interface FooterSchedule {
  day: string;
  hours: string;
}

export interface Footer02Props extends SectionProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
  address?: string;
  schedule?: FooterSchedule[];
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Carta", href: "/carta" },
      { label: "Reservar mesa", href: "#contacto" },
    ],
  },
];

const DEFAULT_SCHEDULE: FooterSchedule[] = [
  { day: "Lunes", hours: "Cerrado" },
  { day: "Martes - Jueves", hours: "11:30 - 23:30" },
  { day: "Viernes - Domingo", hours: "10:30 - 00:00" },
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
  schedule = DEFAULT_SCHEDULE,
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
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Contact */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full">
                  <Flame className="size-5" aria-hidden />
                </span>
                <span className="font-heading text-background text-lg font-semibold">
                  {brand}
                </span>
              </div>
              <p className="text-background/70 text-sm text-pretty">
                {tagline}
              </p>
              <p className="text-background/60 flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{address}</span>
              </p>
            </div>

            {/* Navigation */}
            {columns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-4 lg:col-span-1">
                <h3 className="text-background font-heading text-sm font-bold tracking-wide uppercase">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        href={link.href}
                        className="text-background/70 hover:text-background text-sm transition-colors"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Schedule */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <h3 className="text-background font-heading text-sm font-bold tracking-wide uppercase">
                Horario
              </h3>
              <dl className="flex flex-col gap-3 text-sm">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-3">
                    <dt className="text-background/70">{item.day}</dt>
                    <dd className="text-background font-medium">{item.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        <div className="border-background/15 mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm sm:flex-row">
          <p className="text-background/60">
            © {year} {brand}. Todos los derechos reservados.
          </p>
          <p className="text-background/50">
            Diseñado por{" "}
            <a
              href="https://www.klentcreative.com"
              target="_blank"
              rel="noreferrer"
              className="text-background hover:text-primary transition-colors font-medium"
            >
              KLENT CREATIVE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
