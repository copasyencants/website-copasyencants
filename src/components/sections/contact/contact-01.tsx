"use client";

import { useState } from "react";
import {
  CalendarCheck,
  CircleEuro,
  MapPin,
  Clock,
  Phone,
  Mail,
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
  schedule?: ContactHours[];
}

const DEFAULT_SCHEDULE: ContactHours[] = [
  { days: "Lunes", hours: "Cerrado" },
  { days: "Martes", hours: "11:30 – 23:30" },
  { days: "Miércoles", hours: "11:30 – 23:30" },
  { days: "Jueves", hours: "11:30 – 23:30" },
  { days: "Viernes – Domingo", hours: "10:30 – 00:00" },
];

/**
 * Contact 01 — section contact en deux colonnes : coordonnées (adresse,
 * horaires, téléphone, email) et formulaire de réservation accessible (labels
 * liés, retour via toast). Idéal restaurant / prise de réservation.
 */
export function Contact01({
  className,
  eyebrow = "Contacto",
  title = "Reserva tu mesa junto al fuego",
  description = "Escríbenos y te confirmamos tu reserva en menos de una hora. Para grupos de más de 8 personas, llámanos directamente.",
  address = "Carrer de Bilbao, 18-22, Sant Martí, 08005 Barcelona",
  phone = "934 67 21 30",
  email = "",
  priceRange = "10-20 € por persona",
  bookingUrl = "https://sumupbookings.com",
  schedule = DEFAULT_SCHEDULE,
  ...props
}: Contact01Props) {
  const [guests, setGuests] = useState("2");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("¡Solicitud recibida!", {
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
                    <p className="font-medium">Dirección</p>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Teléfono</p>
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
                    <CalendarCheck className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">Reservas</p>
                    <a
                      href={bookingUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sumupbookings.com
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-border bg-muted/40 h-full rounded-2xl border p-5">
                <div className="text-foreground mb-3 flex items-center gap-2 font-medium">
                  <Clock className="text-primary size-5" aria-hidden />
                  Horario
                </div>
                <dl className="divide-border divide-y text-sm">
                  {schedule.map((row) => (
                    <div
                      key={row.days}
                      className="flex items-center justify-between gap-4 py-2"
                    >
                      <dt className="text-muted-foreground">{row.days}</dt>
                      <dd className="shrink-0 font-medium">{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
                <Label htmlFor="contact-phone">Teléfono</Label>
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
                placeholder="Alergias, ocasión especial, preferencia de mesa…"
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
