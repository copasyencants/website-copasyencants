import { Phone, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/effects/reveal";

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
}

export function MenuHeader({
  badge = "Pizzabar & Cócteles",
  title = "Nuestra Carta",
  description = "Descubre todas nuestras pizzas napolitanas artesanales, bebidas cuidadosamente seleccionadas y cócteles auténticos. Cada plato elaborado con los mejores ingredientes frescos.",
  phone = "934 672 130",
  phoneHref = "tel:+34934672130",
  address = "Carrer de Bilbao, 18-22",
  addressHref = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a38f7a4e8dc7:0xc9b99a7a043a167e",
  instagramHandle = "@copasyencants",
  instagramHref = "https://instagram.com/copasyencants",
}: MenuHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent py-20 sm:py-28">
      <div className="container-content mx-auto">
        <div className="flex max-w-3xl mx-auto flex-col items-center gap-6 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-3">
              <p className="text-primary text-xs font-bold tracking-widest uppercase letter-spacing">
                {badge}
              </p>
              <h1 className="text-h1 font-heading font-bold text-balance leading-tight">
                {title}
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
              <Link
                href={phoneHref}
                className="text-primary hover:text-primary/80 flex items-center justify-center gap-2 text-sm font-semibold transition"
              >
                <Phone className="size-5" />
                <span>{phone}</span>
              </Link>
              <div className="hidden sm:block text-border">|</div>
              <Link
                href={addressHref}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 flex items-center justify-center gap-2 text-sm font-semibold transition"
              >
                <MapPin className="size-5" />
                <span>{address}</span>
              </Link>
              <div className="hidden sm:block text-border">|</div>
              <Link
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 flex items-center justify-center gap-2 text-sm font-semibold transition"
              >
                <Share2 className="size-5" />
                <span>{instagramHandle}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
