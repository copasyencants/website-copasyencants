import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar02 } from "@/components/sections/navbar";
import { Footer02 } from "@/components/sections/footer";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MenuCard } from "@/components/menu/menu-card";
import { MenuHeader } from "@/components/menu/menu-header";
import { constructMetadata } from "@/lib/metadata";

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
        />

        <div className="container-content py-12 space-y-20">
          {/* Pizzas Clásicas */}
          <section>
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
          <section>
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
          <section>
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
          <section>
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
          <section>
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
