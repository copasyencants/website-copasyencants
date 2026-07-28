"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Flame } from "lucide-react";
import { NavLink } from "@/components/ui/nav-link";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export interface NavLink {
  label: string;
  href: string;
}

export interface Navbar02Props extends SectionProps {
  brand?: string;
  logoHref?: string;
  links?: NavLink[];
  cta?: NavLink;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Carta", href: "/carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Historia", href: "#historia" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Navbar 02 — en-tête collant translucide (effet verre au défilement), marque
 * en serif, navigation ancrée, bascule de thème et CTA. Menu latéral accessible
 * en mobile. Idéal restaurant / marque premium.
 */
export function Navbar02({
  className,
  brand = "Copas y Encants",
  logoHref = "#inicio",
  links = DEFAULT_LINKS,
  cta = { label: "Reservar mesa", href: "#contacto" },
  ...props
}: Navbar02Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 border-border/70 border-b shadow-sm backdrop-blur-md"
          : "bg-transparent",
        className,
      )}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      <nav className="container-content flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href={logoHref}
          className="group flex items-center gap-2"
          aria-label={`${brand} — inicio`}
        >
          <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full">
            <Flame className="size-5" aria-hidden />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight">
            {brand}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className="text-foreground/80 hover:text-foreground hover:bg-muted rounded-full px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-10 px-5 sm:inline-flex">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-10 lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-2xl">
                  {brand}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <NavLink
                      href={link.href}
                      className="hover:bg-muted rounded-lg px-3 py-3 text-base font-medium transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4 h-11">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
