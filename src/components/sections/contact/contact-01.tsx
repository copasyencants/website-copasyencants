"use client";

import { useState } from "react";
import {
  CalendarCheck,
  CircleEuro,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/effects/reveal";

export interface ContactHours {
  days: string;
  hours: string;
}

export interface Contact01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  priceRange?: string;
  bookingUrl?: string;
  mapUrl?: string;
  glovoUrl?: string;
  uberEatsUrl?: string;
  schedule?: ContactHours[];
}

const DEFAULT_SCHEDULE: ContactHours[] = [
  { days: "Lunes", hours: "Cerrado" },
  { days: "Martes", hours: "11:30 - 23:30" },
  { days: "Miercoles", hours: "11:30 - 23:30" },
  { days: "Jueves", hours: "11:30 - 23:30" },
  { days: "Viernes", hours: "10:30 - 00:00" },
  { days: "Sabado", hours: "10:30 - 00:00" },
  { days: "Domingo", hours: "10:30 - 00:00" },
];

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a38f7a4e8dc7:0xc9b99a7a043a167e";

const DEFAULT_GLOVO_URL =
  "https://glovoapp.com/es/es/barcelona/stores/copas-y-encants-barcelona?utm_medium=organic&utm_campaign=google_reserve_place_order_action&utm_source=google";

const DEFAULT_UBER_EATS_URL =
  "https://www.ubereats.com/es/store/copas-y-encants-pizza-napoletana/wG3xvmaoViGOzbVwUE_eog?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas";

/**
 * Contact 01 - section contact en deux colonnes : coordonnees, horaires,
 * liens de commande et formulaire de reservation accessible.
 */
export function Contact01({
  className,
  eyebrow = "Contacto",
  title = "Reserva tu mesa junto al fuego",
  description = "Escribenos y te confirmamos tu reserva en menos de una hora. Para grupos de mas de 8 personas, llamanos directamente.",
  address = "Carrer de Bilbao, 18-22, Sant Marti, 08005 Barcelona",
  phone = "934 67 21 30",
  email = "",
  priceRange = "10-20 EUR por persona",
  bookingUrl = "#contacto",
  mapUrl = DEFAULT_MAP_URL,
  glovoUrl = DEFAULT_GLOVO_URL,
  uberEatsUrl = DEFAULT_UBER_EATS_URL,
  schedule = DEFAULT_SCHEDULE,
  ...props
}: Contact01Props) {
  const [guests, setGuests] = useState("2");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Solicitud recibida", {
      description: "Te confirmaremos tu reserva por email muy pronto.",
    });
    e.currentTarget.reset();
    setGuests("2");
  }

  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div className="flex flex-col gap-8">
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

          <div className="grid gap-5 md:grid-cols-2">
            <Reveal delay={0.15}>
              <ul className="border-border bg-muted/40 flex h-full flex-col gap-4 rounded-2xl border p-5">
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Direccion</p>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {address}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Telefono</p>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </li>
                {email ? (
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                      <Mail className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </li>
                ) : null}
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <CircleEuro className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Precio</p>
                    <p className="text-muted-foreground">{priceRange}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <ShoppingBag className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Pedidos</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="h-9 rounded-full px-4"
                      >
                        <a href={glovoUrl} target="_blank" rel="noreferrer">
                          Glovo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="h-9 rounded-full px-4"
                      >
                        <a href={uberEatsUrl} target="_blank" rel="noreferrer">
                          Uber Eats
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <CalendarCheck className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Reservas</p>
                    <a
                      href={bookingUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Formulario de contacto
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>

          </div>
        </div>

        <Reveal delay={0.1} className="lg:self-end">
          <form
            onSubmit={handleSubmit}
            className="border-border bg-card flex flex-col gap-5 rounded-3xl border p-6 shadow-lg sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name">Nombre</Label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-phone">Telefono</Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="600 000 000"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-date">Fecha</Label>
                <Input id="contact-date" name="date" type="date" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-guests">Comensales</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger id="contact-guests" className="w-full">
                    <SelectValue placeholder="Personas" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                      <SelectItem key={n} value={n}>
                        {n} {n === "1" ? "persona" : "personas"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">Mensaje (opcional)</Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Alergias, ocasion especial, preferencia de mesa..."
              />
            </div>

            <Button type="submit" className="mt-1 h-12 text-base">
              Solicitar reserva
            </Button>
            <p className="text-muted-foreground text-center text-xs">
              Al enviar aceptas ser contactado para confirmar tu reserva.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
