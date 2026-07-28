import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar02 } from "@/components/sections/navbar";
import { Footer02 } from "@/components/sections/footer";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MenuCard } from "@/components/menu/menu-card";
import { MenuHeader } from "@/components/menu/menu-header";
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
    vinos: MenuDataItem[];
    licores: MenuDataItem[];
    cocteles: MenuDataItem[];
    postres: MenuDataItem[];
  };

  const categoryLinks = [
    { href: "#clasicas", label: t("sections.clasicas") },
    { href: "#blancas", label: t("sections.blancas") },
    { href: "#entrantes", label: t("sections.entrantes") },
    { href: "#bebidas", label: t("sections.bebidas") },
    { href: "#postres", label: t("sections.postres") },
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
                className="border-border/70 bg-card hover:border-primary/40 hover:text-primary shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
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
                <MenuCard key={`clasica-${i}`} {...item} />
              ))}
            </div>
          </section>

          {/* Pizzas Blancas */}
          <section id="blancas" className="scroll-mt-32">
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.blancas")}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.blancas.map((item, i) => (
                <MenuCard key={`blanca-${i}`} {...item} />
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
                <MenuCard key={`entrante-${i}`} {...item} />
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

            <div className="space-y-12">
              {/* Cervezas */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {t("sections.cervezas")}
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {items.cervezas.map((item, i) => (
                    <MenuCard key={`cerveza-${i}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Vinos */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {t("sections.vinos")}
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {items.vinos.map((item, i) => (
                    <MenuCard key={`vino-${i}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Licores */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {t("sections.licores")}
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {items.licores.map((item, i) => (
                    <MenuCard key={`licor-${i}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Cócteles */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {t("sections.cocteles")}
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {items.cocteles.map((item, i) => (
                    <MenuCard key={`coctel-${i}`} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Postres */}
          <section id="postres" className="scroll-mt-32">
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">
                {t("sections.postres")}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.postres.map((item, i) => (
                <MenuCard key={`postre-${i}`} {...item} />
              ))}
            </div>
          </section>
        </div>

        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 mt-20">
          <div className="container-content text-center">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              {t("commitment.eyebrow")}
            </p>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              {t("commitment.title")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
