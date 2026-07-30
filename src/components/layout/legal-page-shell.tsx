import { getTranslations } from "next-intl/server";

import { Navbar02 } from "@/components/sections/navbar";
import { Footer02 } from "@/components/sections/footer";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export interface LegalPageShellProps {
  locale: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}

/**
 * Shared shell for legal pages (aviso legal, privacidad, cookies).
 * Content stays in Spanish across all locales since it documents a
 * specific Spanish legal entity, but the surrounding nav/footer keep
 * following the current locale.
 */
export async function LegalPageShell({
  locale,
  title,
  updated,
  children,
}: LegalPageShellProps) {
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });

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
        <div className="container-content section-sm mx-auto max-w-3xl">
          <h1 className="text-h1 font-heading font-semibold text-balance">
            {title}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Última actualización: {updated}
          </p>
          <div className="mt-8 flex flex-col gap-6 text-neutral-700 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-heading [&_h2]:mt-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-neutral-950 [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
            {children}
          </div>
        </div>
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
