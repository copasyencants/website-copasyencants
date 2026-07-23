import type { Metadata } from "next";
import { Flame, Wheat, Leaf, ChefHat } from "lucide-react";

import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Navbar02 } from "@/components/sections/navbar";
import { Hero03 } from "@/components/sections/hero";
import { Features01, Features02 } from "@/components/sections/features";
import { Menu01 } from "@/components/sections/menu";
import { Cta02 } from "@/components/sections/cta";
import { Gallery01 } from "@/components/sections/gallery";
import { Timeline01 } from "@/components/sections/timeline";
import { Testimonials02 } from "@/components/sections/testimonials";
import { Faq01 } from "@/components/sections/faq";
import { Contact01 } from "@/components/sections/contact";
import { Footer02 } from "@/components/sections/footer";

export const metadata: Metadata = constructMetadata();

const SPECIALTIES = [
  {
    icon: Flame,
    title: "Horno de leña",
    description:
      "Cocción a 485° que sella el sabor en 90 segundos y da a la masa su borde aireado y ligeramente ahumado.",
  },
  {
    icon: Wheat,
    title: "Masa madre 48 h",
    description:
      "Fermentación lenta con masa madre viva para una pizza más ligera, digestiva y llena de aroma.",
  },
  {
    icon: Leaf,
    title: "Producto fresco",
    description:
      "Tomate San Marzano D.O.P., mozzarella fior di latte y verduras de temporada de productores locales.",
  },
  {
    icon: ChefHat,
    title: "Cocina abierta",
    description:
      "Nuestros pizzaioli trabajan a la vista: cada pizza es un pequeño espectáculo artesanal.",
  },
];

const RESTAURANT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description: siteConfig.description,
  servesCuisine: ["Pizza", "Restaurante"],
  priceRange: "10-20 €",
  url: siteConfig.url,
  telephone: "+34934672130",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer de Bilbao, 18-22",
    postalCode: "08005",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "11:30",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "10:30",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:30",
      closes: "00:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "146",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RESTAURANT_JSONLD) }}
      />
      <Navbar02 />
      <main id="inicio" className="flex flex-col">
        <Hero03 />

        <Features02 id="nosotros" />

        <Features01
          id="especialidades"
          eyebrow="Nuestro oficio"
          title="Cuatro obsesiones, una sola pizza"
          description="Todo lo que hacemos gira en torno a un objetivo: la pizza napolitana perfecta, honesta y llena de carácter."
          features={SPECIALTIES}
        />

        <Menu01 id="carta" />

        <Cta02 />

        <Gallery01 id="galeria" />

        <Timeline01 id="historia" />

        <Testimonials02 id="opiniones" />

        <Faq01
          id="faq"
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
          description="¿No encuentras tu respuesta? Llámanos o escríbenos, te atendemos encantados."
          items={[
            {
              question: "¿Es necesario reservar mesa?",
              answer:
                "Lo recomendamos, sobre todo de viernes a domingo. Puedes reservar desde nuestra web en menos de un minuto o por teléfono.",
            },
            {
              question: "¿Tenéis opciones vegetarianas o sin gluten?",
              answer:
                "Sí. Contamos con varias pizzas vegetarianas y una masa sin gluten elaborada en zona separada. Indícanoslo al reservar.",
            },
            {
              question: "¿Se puede pedir para llevar?",
              answer:
                "Por supuesto. Puedes recoger tu pedido en el local; horneamos tu pizza justo antes de que llegues para que la disfrutes en su punto.",
            },
            {
              question: "¿Organizáis eventos privados?",
              answer:
                "Reservamos el local para grupos y celebraciones. Escríbenos con la fecha y el número de personas y preparamos una propuesta a medida.",
            },
          ]}
        />

        <Contact01 id="contacto" />
      </main>
      <Footer02 />
    </>
  );
}
