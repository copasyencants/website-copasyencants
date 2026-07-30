import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { constructMetadata } from "@/lib/metadata";
import { legalEntity } from "@/lib/legal";
import { LegalPageShell } from "@/components/layout/legal-page-shell";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return constructMetadata({
    title: "Política de Cookies",
    description: "Qué cookies utiliza el sitio web de Copas y Encants.",
    path: "/cookies",
    locale,
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LegalPageShell
      locale={locale}
      title="Política de Cookies"
      updated="30/07/2026"
    >
      <p>
        Una cookie es un pequeño archivo que se almacena en tu navegador
        cuando visitas una página web. Esta política explica qué cookies
        utiliza este sitio web y con qué finalidad.
      </p>

      <h2>Cookies que utilizamos</h2>
      <p>
        Este sitio web únicamente utiliza una cookie técnica de idioma, que
        recuerda tu elección de idioma (español, inglés o catalán) cuando
        cambias manualmente el selector de idioma. Esta cookie es estrictamente
        necesaria para el funcionamiento del sitio y no requiere tu
        consentimiento previo, conforme a la Guía sobre el uso de cookies de
        la Agencia Española de Protección de Datos (AEPD).
      </p>
      <p>
        No utilizamos cookies de análisis, publicidad ni de redes sociales.
        Si en el futuro incorporamos este tipo de cookies, actualizaremos esta
        política y solicitaremos tu consentimiento mediante un aviso
        específico.
      </p>

      <h2>Cómo desactivar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu
        equipo mediante la configuración de tu navegador. Ten en cuenta que
        desactivar la cookie de idioma puede hacer que el sitio no recuerde tu
        preferencia de idioma en futuras visitas.
      </p>

      <h2>Más información</h2>
      <p>
        Si tienes cualquier duda sobre el uso de cookies en este sitio web,
        puedes escribirnos a{" "}
        <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>.
      </p>
    </LegalPageShell>
  );
}
