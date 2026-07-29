"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/ui/nav-link";
import { Link } from "@/i18n/navigation";

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
  logoAriaLabel?: string;
  openMenuAriaLabel?: string;
  links?: NavLink[];
  cta?: NavLink;
  localeSwitcher?: React.ReactNode;
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
  logoAriaLabel,
  openMenuAriaLabel = "Abrir menú",
  links = DEFAULT_LINKS,
  cta = { label: "Reservar mesa", href: "#contacto" },
  localeSwitcher,
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
          className="group flex items-center"
          aria-label={logoAriaLabel ?? brand}
        >
          <span className="flex size-13 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-sm ring-1 ring-white/25 md:size-14">
            <Image
              src="/logo-copasyencants.png"
              alt=""
              width={112}
              height={112}
              className="size-full object-contain"
              aria-hidden
              priority
            />
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
          {localeSwitcher}
          <Button asChild className="hidden h-10 px-5 sm:inline-flex">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-10 lg:hidden"
                aria-label={openMenuAriaLabel}
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
                {localeSwitcher ? (
                  <div className="mt-2 px-3">{localeSwitcher}</div>
                ) : null}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
