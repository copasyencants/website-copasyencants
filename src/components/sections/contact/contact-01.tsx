"use client";

import { useState } from "react";
import { MapPin, Phone, ShoppingBag } from "lucide-react";
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

export interface Contact01Labels {
  addressCardTitle?: string;
  phoneCardTitle?: string;
  orderCardTitle?: string;
  formName?: string;
  formNamePlaceholder?: string;
  formPhone?: string;
  formPhonePlaceholder?: string;
  formEmail?: string;
  formEmailPlaceholder?: string;
  formDate?: string;
  formGuests?: string;
  guestSingular?: string;
  guestPlural?: string;
  formMessage?: string;
  formMessagePlaceholder?: string;
  submit?: string;
  submitting?: string;
  disclaimer?: string;
  toastTitle?: string;
  toastDescription?: string;
  errorTitle?: string;
  errorDescription?: string;
}

export interface Contact01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  address?: string;
  phone?: string;
  mapUrl?: string;
  glovoUrl?: string;
  uberEatsUrl?: string;
  labels?: Contact01Labels;
}

const DEFAULT_LABELS: Required<Contact01Labels> = {
  addressCardTitle: "Direccion",
  phoneCardTitle: "Telefono",
  orderCardTitle: "Pedir Ahora",
  formName: "Nombre",
  formNamePlaceholder: "Tu nombre",
  formPhone: "Telefono",
  formPhonePlaceholder: "600 000 000",
  formEmail: "Email",
  formEmailPlaceholder: "tu@email.com",
  formDate: "Fecha",
  formGuests: "Comensales",
  guestSingular: "persona",
  guestPlural: "personas",
  formMessage: "Mensaje (opcional)",
  formMessagePlaceholder: "Alergias, ocasion especial, preferencia de mesa...",
  submit: "Solicitar reserva",
  submitting: "Enviando...",
  disclaimer: "Al enviar aceptas ser contactado para confirmar tu reserva.",
  toastTitle: "Solicitud recibida",
  toastDescription: "Te confirmaremos tu reserva por email muy pronto.",
  errorTitle: "No se pudo enviar la solicitud",
  errorDescription: "Intentalo de nuevo o llamanos por telefono.",
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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
  mapUrl = DEFAULT_MAP_URL,
  glovoUrl = DEFAULT_GLOVO_URL,
  uberEatsUrl = DEFAULT_UBER_EATS_URL,
  labels,
  ...props
}: Contact01Props) {
  const [guests, setGuests] = useState("2");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const l = { ...DEFAULT_LABELS, ...labels };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error(l.errorTitle, { description: l.errorDescription });
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "Nueva solicitud de reserva - Copas y Encants");

    setIsSubmitting(true);
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        toast.success(l.toastTitle, { description: l.toastDescription });
        form.reset();
        setGuests("2");
      } else {
        toast.error(l.errorTitle, { description: l.errorDescription });
      }
    } catch {
      toast.error(l.errorTitle, { description: l.errorDescription });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6">
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
              <p className="text-muted-foreground text-base text-pretty">
                {description}
              </p>
            </Reveal>
          ) : null}

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            {/* Direccion */}
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-950 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <p className="font-medium text-neutral-950">
                    {l.addressCardTitle}
                  </p>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-neutral-600 transition-colors hover:text-primary"
                >
                  {address}
                </a>
              </div>
            </Reveal>

            {/* Telefono */}
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-950 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <p className="font-medium text-neutral-950">
                    {l.phoneCardTitle}
                  </p>
                </div>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary"
                >
                  {phone}
                </a>
              </div>
            </Reveal>

            {/* Precio & Pedidos */}
            <Reveal delay={0.25}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-950 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full">
                    <ShoppingBag className="size-5" aria-hidden />
                  </span>
                  <p className="font-medium text-neutral-950">
                    {l.orderCardTitle}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="h-8 rounded-full text-sm"
                  >
                    <a href={glovoUrl} target="_blank" rel="noreferrer">
                      Glovo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="h-8 rounded-full border-neutral-300 bg-white text-sm text-neutral-950 hover:bg-neutral-100 hover:text-neutral-950"
                  >
                    <a href={uberEatsUrl} target="_blank" rel="noreferrer">
                      Uber Eats
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="lg:self-start">
          <form
            onSubmit={handleSubmit}
            className="border-border bg-card flex flex-col gap-5 rounded-3xl border p-6 text-neutral-950 shadow-lg sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name" className="text-neutral-950">
                  {l.formName}
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder={l.formNamePlaceholder}
                  className="border-neutral-300 bg-white text-neutral-950 placeholder:text-neutral-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-phone" className="text-neutral-950">
                  {l.formPhone}
                </Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={l.formPhonePlaceholder}
                  className="border-neutral-300 bg-white text-neutral-950 placeholder:text-neutral-500"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email" className="text-neutral-950">
                {l.formEmail}
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={l.formEmailPlaceholder}
                className="border-neutral-300 bg-white text-neutral-950 placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-date" className="text-neutral-950">
                  {l.formDate}
                </Label>
                <Input
                  id="contact-date"
                  name="date"
                  type="date"
                  className="border-neutral-300 bg-white text-neutral-950"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-guests" className="text-neutral-950">
                  {l.formGuests}
                </Label>
                <input type="hidden" name="guests" value={guests} />
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger
                    id="contact-guests"
                    className="w-full border-neutral-300 bg-white text-neutral-950"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                      <SelectItem key={n} value={n}>
                        {n} {n === "1" ? l.guestSingular : l.guestPlural}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message" className="text-neutral-950">
                {l.formMessage}
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder={l.formMessagePlaceholder}
                className="border-neutral-300 bg-white text-neutral-950 placeholder:text-neutral-500"
              />
            </div>

            <Button
              type="submit"
              className="mt-1 h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? l.submitting : l.submit}
            </Button>
            <p className="text-center text-xs text-neutral-500">
              {l.disclaimer}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
