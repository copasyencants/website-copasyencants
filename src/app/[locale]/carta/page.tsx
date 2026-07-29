import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar02 } from "@/components/sections/navbar";
import { Footer02 } from "@/components/sections/footer";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MenuCard } from "@/components/menu/menu-card";
import { MenuHeader } from "@/components/menu/menu-header";
import { Reveal } from "@/components/effects/reveal";
import { constructMetadata } from "@/lib/metadata";

const GLOVO_URL =
  "https://glovoapp.com/es/es/barcelona/stores/copas-y-encants-barcelona?utm_medium=organic&utm_campaign=google_reserve_place_order_action&utm_source=google";

const UBER_EATS_URL =
  "https://www.ubereats.com/es/store/copas-y-encants-pizza-napoletana/wG3xvmaoViGOzbVwUE_eog?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "carta.meta" });

  return constructMetadata({
    title: t("title"),
    description: t("description"),
    path: "/carta",
    locale,
  });
}

interface MenuDataItem {
  name: string;
  description?: string;
  price: string;
}

const MENU_CARD_IMAGES = {
  clasicas: [
    "/platos/margherita.avif",
    "/platos/bufala.avif",
    "/platos/marinara.avif",
    "/platos/diavola.avif",
    "/platos/vegetariana.avif",
    "/platos/Prosciutto Cotto.avif",
    "/platos/Prosciutto Cotto e Funghi.avif",
    "/platos/Salami.avif",
    "/platos/4 Formaggi.avif",
    "/platos/4 Estaciones.avif",
    undefined,
    "/platos/Atún y Cebolla.avif",
    "/platos/Ibérica.avif",
    "/platos/Napoli.avif",
    undefined,
  ],
  blancas: [
    "/platos/Mortadella.avif",
    "/platos/Carbonara Tópica.avif",
    "/platos/Pera y Gorgonzola.avif",
    "/platos/Pancetta.avif",
    "/platos/Parma.avif",
  ],
  entrantes: [
    "/platos/Bruschetta.avif",
    "/platos/Focaccia.avif",
    "/platos/Pan de Ajo.avif",
    "/platos/Gambas al Ajillo.avif",
    "/platos/Mejillones al Vapor.avif",
    "/platos/Chorizo al Vino.avif",
    "/platos/Chorizo con Provolone.avif",
    undefined,
    "/platos/Albóndigas Caseras.avif",
  ],
  postres: [
    "/platos/Pizza de Nutella.avif",
    "/platos/Cannoli Siciliano.avif",
    "/platos/Tiramisú.avif",
  ],
} satisfies Record<string, Array<string | undefined>>;

function BeverageSection({
  title,
  items,
}: {
  title: string;
  items: MenuDataItem[];
}) {
  return (
    <Reveal>
      <section className="overflow-hidden rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow-sm">
        <div className="flex items-center gap-4 border-b border-neutral-200 bg-neutral-50 px-5 py-4">
          <h3 className="font-heading text-lg font-semibold leading-none">
            {title}
          </h3>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="divide-y divide-neutral-100 px-5">
          {items.map((item, i) => (
            <div
              key={`${title}-${i}`}
              className="flex items-center justify-between gap-4 py-3.5"
            >
              <div className="min-w-0">
                <p className="font-medium leading-tight">{item.name}</p>
                {item.description ? (
                  <p className="mt-1 text-sm leading-snug text-neutral-600">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default async function CartaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });
  const t = await getTranslations({ locale, namespace: "carta" });

  const items = t.raw("items") as {
    clasicas: MenuDataItem[];
    blancas: MenuDataItem[];
    entrantes: MenuDataItem[];
    cervezas: MenuDataItem[];
    refrescos: MenuDataItem[];
    vinos: MenuDataItem[];
    licores: MenuDataItem[];
    whiskey: MenuDataItem[];
    cafe: MenuDataItem[];
    cocteles: MenuDataItem[];
    combinados: MenuDataItem[];
    postres: MenuDataItem[];
  };

  const categoryLinks = [
    { href: "#clasicas", label: t("sections.clasicas") },
    { href: "#blancas", label: t("sections.blancas") },
    { href: "#entrantes", label: t("sections.entrantes") },
    { href: "#postres", label: t("sections.postres") },
    { href: "#bebidas", label: t("sections.bebidas") },
  ];

  return (
    <>
      <Navbar02
        brand={tNav("brand")}
        logoHref="/"
        logoAriaLabel={tNav("logoAriaLabel")}
        openMenuAriaLabel={tNav("openMenuAriaLabel")}
        links={[
          { label: tNav("links.specialties"), href: "/#especialidades" },
          { label: tNav("links.menu"), href: "/carta" },
          { label: tNav("links.gallery"), href: "/#galeria" },
          { label: tNav("links.history"), href: "/#historia" },
          { label: tNav("links.contact"), href: "/#contacto" },
        ]}
        cta={{ label: tNav("cta"), href: "/#contacto" }}
        localeSwitcher={<LocaleSwitcher />}
      />
      <main className="min-h-screen">
        <MenuHeader
          badge={t("header.badge")}
          title={t("header.title")}
          description={t("header.description")}
          phone={t("header.phone")}
          address={t("header.address")}
          instagramHandle={t("header.instagramHandle")}
          reserveAction={{ label: t("header.reserve"), href: "/#contacto" }}
          orderActions={[
            { label: t("header.orderGlovo"), href: GLOVO_URL },
            { label: t("header.orderUberEats"), href: UBER_EATS_URL },
          ]}
        />

        <nav
          aria-label="Menu categories"
          className="border-border/70 bg-background/85 sticky top-16 z-30 border-y backdrop-blur-md md:top-20"
        >
          <div className="container-content flex gap-2 overflow-x-auto py-3">
            {categoryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary/40 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="container-content space-y-20 py-12">
          {/* Pizzas Clásicas */}
          <section id="clasicas" className="scroll-mt-32">
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.clasicas")}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.clasicas.map((item, i) => (
                <MenuCard
                  key={`clasica-${i}`}
                  {...item}
                  imageSrc={MENU_CARD_IMAGES.clasicas[i]}
                />
              ))}
            </div>
          </section>

          {/* Pizzas Blancas */}
          <section
            id="blancas"
            className="bg-primary text-primary-foreground relative scroll-mt-32 overflow-hidden rounded-2xl p-6 shadow-lg md:p-8"
          >
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px]" />
            <div className="relative z-10 mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.blancas")}
              </h2>
              <div className="h-1 w-12 rounded-full bg-white"></div>
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.blancas.map((item, i) => (
                <MenuCard
                  key={`blanca-${i}`}
                  {...item}
                  imageSrc={MENU_CARD_IMAGES.blancas[i]}
                />
              ))}
            </div>
          </section>

          {/* Entrantes */}
          <section id="entrantes" className="scroll-mt-32">
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.entrantes")}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.entrantes.map((item, i) => (
                <MenuCard
                  key={`entrante-${i}`}
                  {...item}
                  imageSrc={MENU_CARD_IMAGES.entrantes[i]}
                />
              ))}
            </div>
          </section>

          {/* Postres */}
          <section
            id="postres"
            className="bg-primary text-primary-foreground relative scroll-mt-32 overflow-hidden rounded-2xl p-6 shadow-lg md:p-8"
          >
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px]" />
            <div className="relative z-10 mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.postres")}
              </h2>
              <div className="h-1 w-12 rounded-full bg-white"></div>
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.postres.map((item, i) => (
                <MenuCard
                  key={`postre-${i}`}
                  {...item}
                  imageSrc={MENU_CARD_IMAGES.postres[i]}
                />
              ))}
            </div>
          </section>

          {/* Bebidas */}
          <section id="bebidas" className="scroll-mt-32">
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.bebidas")}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <BeverageSection
                  title={t("sections.cervezas")}
                  items={items.cervezas}
                />
                <BeverageSection
                  title={t("sections.vinos")}
                  items={items.vinos}
                />
                <BeverageSection
                  title={t("sections.whiskey")}
                  items={items.whiskey}
                />
                <BeverageSection
                  title={t("sections.combinados")}
                  items={items.combinados}
                />
              </div>
              <div className="space-y-6">
                <BeverageSection
                  title={t("sections.refrescos")}
                  items={items.refrescos}
                />
                <BeverageSection
                  title={t("sections.licores")}
                  items={items.licores}
                />
                <BeverageSection title={t("sections.cafe")} items={items.cafe} />
                <BeverageSection
                  title={t("sections.cocteles")}
                  items={items.cocteles}
                />
              </div>
            </div>
          </section>
        </div>

        <section className="bg-primary text-primary-foreground relative mt-20 overflow-hidden py-16">
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="container-content text-center">
            <p className="mb-2 text-sm font-semibold tracking-widest text-white/80 uppercase">
              {t("commitment.eyebrow")}
            </p>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              {t("commitment.title")}
            </h3>
            <p className="mx-auto max-w-2xl text-white/85">
              {t("commitment.description")}
            </p>
          </div>
        </section>
      </main>
      <Footer02
        brand={tNav("brand")}
        tagline={tFooter("tagline")}
        address="Carrer de Bilbao, 18-22, Sant Marti, 08005 Barcelona"
        columns={[
          {
            title: tFooter("navTitle"),
            links: [
              { label: tFooter("navHome"), href: "/#inicio" },
              { label: tFooter("navMenu"), href: "/carta" },
              { label: tFooter("navBook"), href: "/#contacto" },
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
