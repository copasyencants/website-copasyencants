import type { Metadata } from "next";
import { Armchair, Flame, Wheat, Leaf, type LucideIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
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

const MAP_URL =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a38f7a4e8dc7:0xc9b99a7a043a167e";

const GLOVO_URL =
  "https://glovoapp.com/es/es/barcelona/stores/copas-y-encants-barcelona?utm_medium=organic&utm_campaign=google_reserve_place_order_action&utm_source=google";

const UBER_EATS_URL =
  "https://www.ubereats.com/es/store/copas-y-encants-pizza-napoletana/wG3xvmaoViGOzbVwUE_eog?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas";

const SPECIALTY_ICONS: LucideIcon[] = [Flame, Wheat, Leaf, Armchair];

const MENU_IMAGE_SRCS = [
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1751200884901-c1c6f43ae1d6?q=85&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85",
  "/images/4 fromagi-acceuil.jpg",
  "/images/pera y gorganzola accueil.png",
  "https://images.unsplash.com/photo-1758157835961-5db4a033390b?q=85&w=900&auto=format&fit=crop",
];

const GALLERY_IMAGE_SRCS = [
  {
    src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=80",
    area: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/foto-horno.png",
  },
  {
    src: "/images/photo-pizza2.png",
  },
  {
    src: "/images/foto-fachada2.png",
  },
  {
    src: "/images/foto-terraza.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1200&q=80",
    area: "sm:col-span-2",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  return constructMetadata({ description: t("description"), locale });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });

  const specialties = (
    t.raw("specialties.items") as { title: string; description: string }[]
  ).map((item, i) => ({ ...item, icon: SPECIALTY_ICONS[i] }));

  const menuItems = (
    t.raw("menu.items") as {
      name: string;
      subtitle: string;
      description: string;
      price: string;
      tag?: string;
    }[]
  ).map((item, i) => ({ ...item, imageSrc: MENU_IMAGE_SRCS[i] }));

  const galleryImages = (t.raw("gallery.imagesAlt") as string[]).map(
    (alt, i) => ({ ...GALLERY_IMAGE_SRCS[i], alt }),
  );

  const RESTAURANT_JSONLD = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: t("hero.description"),
    servesCuisine: ["Pizza", "Restaurant"],
    priceRange: "10-20 €",
    url: siteConfig.url,
    telephone: "+34934672130",
    hasMap: MAP_URL,
    sameAs: [MAP_URL, GLOVO_URL, UBER_EATS_URL],
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
    potentialAction: [
      { "@type": "OrderAction", target: GLOVO_URL, name: t("cta.orderGlovo") },
      {
        "@type": "OrderAction",
        target: UBER_EATS_URL,
        name: t("cta.orderUberEats"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RESTAURANT_JSONLD) }}
      />
      <Navbar02
        brand={tNav("brand")}
        logoAriaLabel={tNav("logoAriaLabel")}
        openMenuAriaLabel={tNav("openMenuAriaLabel")}
        links={[
          { label: tNav("links.specialties"), href: "#especialidades" },
          { label: tNav("links.menu"), href: "/carta" },
          { label: tNav("links.gallery"), href: "#galeria" },
          { label: tNav("links.history"), href: "#historia" },
          { label: tNav("links.contact"), href: "#contacto" },
        ]}
        cta={{ label: tNav("cta"), href: "#contacto" }}
        localeSwitcher={<LocaleSwitcher />}
      />
      <main id="inicio" className="flex flex-col">
        <Hero03
          eyebrow={t("hero.eyebrow")}
          titleTop={t("hero.titleTop")}
          titleAccent={t("hero.titleAccent")}
          titleBottom={t("hero.titleBottom")}
          description={t("hero.description")}
          primary={{ label: t("hero.primary"), href: "#contacto" }}
          secondary={{ label: t("hero.secondary"), href: "/carta" }}
          orderActions={[
            { label: t("cta.orderGlovo"), href: GLOVO_URL },
            { label: t("cta.orderUberEats"), href: UBER_EATS_URL },
          ]}
          reviewsLabel={t("hero.reviewsLabel")}
          stats={t.raw("hero.stats")}
          imageSrc="/images/foto-fachada.png"
          videoSrc=""
        />

        <Features02
          id="nosotros"
          eyebrow={t("essence.eyebrow")}
          title={t("essence.title")}
          description={t("essence.description")}
          points={t.raw("essence.points")}
          badge={{
            value: t("essence.badgeValue"),
            label: t("essence.badgeLabel"),
          }}
        />

        <Features01
          id="especialidades"
          eyebrow={t("specialties.eyebrow")}
          title={t("specialties.title")}
          description={t("specialties.description")}
          features={specialties}
        />

        <Menu01
          id="carta"
          eyebrow={t("menu.eyebrow")}
          title={t("menu.title")}
          description={t("menu.description")}
          items={menuItems}
          cta={{ label: t("menu.cta"), href: "/carta" }}
        />

        <Cta02
          eyebrow={t("cta.eyebrow")}
          title={t("cta.title")}
          description={t("cta.description")}
          primary={{ label: t("cta.primary"), href: "#contacto" }}
          secondary={{ label: t("cta.secondary"), href: "tel:+34934672130" }}
          orderActions={[
            { label: t("cta.orderGlovo"), href: GLOVO_URL },
            { label: t("cta.orderUberEats"), href: UBER_EATS_URL },
          ]}
        />

        <Gallery01
          id="galeria"
          eyebrow={t("gallery.eyebrow")}
          title={t("gallery.title")}
          description={t("gallery.description")}
          images={galleryImages}
        />

        <Timeline01
          id="historia"
          eyebrow={t("timeline.eyebrow")}
          title={t("timeline.title")}
          description={t("timeline.description")}
          entries={t.raw("timeline.entries")}
          imageSrc="/images/foto-pizza.jpg"
          imageAlt={t("timeline.imageAlt")}
        />

        <Testimonials02
          id="opiniones"
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          description={t("testimonials.description")}
          testimonials={t.raw("testimonials.items")}
        />

        <Faq01
          id="faq"
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          description={t("faq.description")}
          items={t.raw("faq.items")}
        />

        <Contact01
          id="contacto"
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
          mapUrl={MAP_URL}
          glovoUrl={GLOVO_URL}
          uberEatsUrl={UBER_EATS_URL}
          labels={t.raw("contact.labels")}
        />
      </main>
      <Footer02
        brand={tNav("brand")}
        tagline={tFooter("tagline")}
        address="Carrer de Bilbao, 18-22, Sant Marti, 08005 Barcelona"
        columns={[
          {
            title: tFooter("navTitle"),
            links: [
              { label: tFooter("navHome"), href: "#inicio" },
              { label: tFooter("navMenu"), href: "/carta" },
              { label: tFooter("navBook"), href: "#contacto" },
            ],
          },
        ]}
        schedule={tFooter.raw("schedule")}
        scheduleTitle={tFooter("scheduleTitle")}
        rightsText={tFooter("rightsText")}
        designedByText={tFooter("designedByText")}
      />
    </>
  );
}
