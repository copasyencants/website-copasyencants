"use client";

import Image from "next/image";
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
  scheduleTitle?: string;
  rightsText?: string;
  designedByText?: string;
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
  scheduleTitle = "Horario",
  rightsText = "Todos los derechos reservados.",
  designedByText = "Diseñado por",
  ...props
}: Footer02Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mt-auto border-t border-neutral-200 bg-white text-neutral-800",
        className,
      )}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      <div className="container-content section-sm">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Brand & Contact */}
            <div className="flex max-w-xl items-start gap-5 lg:col-span-6">
              <div className="flex size-22 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-white/20 md:size-24">
                <Image
                  src="/logo-copasyencants.svg"
                  alt=""
                  width={96}
                  height={96}
                  className="size-full object-contain"
                  aria-hidden
                />
              </div>
              <div className="flex min-w-0 flex-col gap-4 pt-2">
                <p className="max-w-md text-sm leading-relaxed text-neutral-700 text-pretty">
                  {tagline}
                </p>
                <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                  {address}
                </p>
              </div>
            </div>

            {/* Navigation */}
            {columns.map((col) => (
              <nav
                key={col.title}
                className="flex flex-col gap-4 md:pl-2 lg:col-span-2 lg:pl-0"
              >
                <h3 className="font-heading text-sm font-bold tracking-wide text-neutral-950 uppercase">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        href={link.href}
                        className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Schedule */}
            <div className="flex flex-col gap-4 lg:col-span-4 lg:pl-4">
              <h3 className="font-heading text-sm font-bold tracking-wide text-neutral-950 uppercase">
                {scheduleTitle}
              </h3>
              <dl className="flex max-w-sm flex-col overflow-hidden rounded-lg border border-neutral-200 text-sm">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-neutral-200 px-4 py-3 last:border-b-0"
                  >
                    <dt className="text-neutral-600">{item.day}</dt>
                    <dd className="text-right font-semibold text-neutral-950">
                      {item.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-sm sm:flex-row">
          <p className="text-neutral-500">
            © {year} {brand}. {rightsText}
          </p>
          <p className="text-neutral-500">
            {designedByText}{" "}
            <a
              href="https://www.klentcreative.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-950 transition-colors hover:text-primary"
            >
              KLENT CREATIVE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
