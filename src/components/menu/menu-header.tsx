import { CalendarCheck, MapPin, Phone, Share2, ShoppingBag } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";

export interface MenuHeaderAction {
  label: string;
  href: string;
}

export interface MenuHeaderProps {
  badge?: string;
  title?: string;
  description?: string;
  phone?: string;
  phoneHref?: string;
  address?: string;
  addressHref?: string;
  instagramHandle?: string;
  instagramHref?: string;
  reserveAction?: MenuHeaderAction;
  orderLabel?: string;
  orderActions?: MenuHeaderAction[];
}

export function MenuHeader({
  badge = "Pizzabar & Cocktails",
  title = "Nuestra Carta",
  description = "Descubre todas nuestras pizzas napolitanas artesanales, bebidas cuidadosamente seleccionadas y cocteles autenticos.",
  phone = "934 672 130",
  phoneHref = "tel:+34934672130",
  address = "Carrer de Bilbao, 18-22",
  addressHref = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a38f7a4e8dc7:0xc9b99a7a043a167e",
  instagramHandle = "@copasyencants",
  instagramHref = "https://instagram.com/copasyencants",
  reserveAction = { label: "Reservar mesa", href: "/#contacto" },
  orderLabel = "Pide para llevar",
  orderActions = [],
}: MenuHeaderProps) {
  return (
    <section className="from-primary/15 via-primary/5 border-border/70 border-b bg-gradient-to-br to-transparent py-16 sm:py-20">
      <div className="container-content">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-3">
              <p className="text-primary text-xs font-bold tracking-widest uppercase">
                {badge}
              </p>
              <h1 className="text-h1 font-heading font-bold leading-tight text-balance">
                {title}
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button asChild className="h-11 rounded-full px-6 text-base">
                <Link href={reserveAction.href}>
                  <CalendarCheck className="size-4" />
                  {reserveAction.label}
                </Link>
              </Button>
              {orderActions.map((action) => (
                <Button
                  key={action.href}
                  asChild
                  variant="outline"
                  className="h-11 rounded-full px-6 text-base"
                >
                  <a href={action.href} target="_blank" rel="noreferrer">
                    <ShoppingBag className="size-4" />
                    {action.label}
                  </a>
                </Button>
              ))}
            </div>
          </Reveal>

          {orderActions.length > 0 ? (
            <Reveal delay={0.18}>
              <p className="text-muted-foreground text-sm font-medium">
                {orderLabel}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={0.2}>
            <div className="text-muted-foreground mt-2 flex flex-col gap-2 text-sm sm:flex-row sm:justify-center sm:gap-6">
              <a
                href={phoneHref}
                className="text-primary hover:text-primary/80 flex items-center justify-center gap-2 font-semibold transition"
              >
                <Phone className="size-5" />
                <span>{phone}</span>
              </a>
              <div className="text-border hidden sm:block">|</div>
              <a
                href={addressHref}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 flex items-center justify-center gap-2 font-semibold transition"
              >
                <MapPin className="size-5" />
                <span>{address}</span>
              </a>
              <div className="text-border hidden sm:block">|</div>
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 flex items-center justify-center gap-2 font-semibold transition"
              >
                <Share2 className="size-5" />
                <span>{instagramHandle}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
