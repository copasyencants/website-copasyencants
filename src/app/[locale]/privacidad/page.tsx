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
    title: "Política de Privacidad",
    description:
      "Cómo tratamos los datos personales enviados a través del formulario de reservas de Copas y Encants.",
    path: "/privacidad",
    locale,
  });
}

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LegalPageShell
      locale={locale}
      title="Política de Privacidad"
      updated="30/07/2026"
    >
      <p>
        En {legalEntity.tradeName} respetamos tu privacidad y tratamos tus
        datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y a la
        Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de
        los derechos digitales (LOPDGDD).
      </p>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Titular:</strong> {legalEntity.fullName}
        </li>
        <li>
          <strong>NIF:</strong> {legalEntity.nif}
        </li>
        <li>
          <strong>Domicilio:</strong> {legalEntity.address}
        </li>
        <li>
          <strong>Correo electrónico:</strong> {legalEntity.email}
        </li>
      </ul>

      <h2>¿Qué datos recogemos y con qué finalidad?</h2>
      <p>
        A través del formulario de reservas de este sitio web recogemos el
        nombre, teléfono, correo electrónico, fecha deseada, número de
        comensales y, en su caso, un mensaje opcional (alergias, ocasión
        especial, preferencia de mesa). Estos datos se utilizan
        exclusivamente para gestionar tu solicitud de reserva y contactar
        contigo para confirmarla.
      </p>

      <h2>Legitimación</h2>
      <p>
        La base legal para el tratamiento de tus datos es tu consentimiento,
        otorgado voluntariamente al rellenar y enviar el formulario de
        reservas.
      </p>

      <h2>Destinatarios y encargados del tratamiento</h2>
      <p>
        Para gestionar el envío del formulario utilizamos el servicio Web3Forms
        (Web3Forms LLC), que actúa como encargado del tratamiento y nos
        transmite por correo electrónico los datos que envías.
      </p>
      <p>
        Este sitio web está alojado en la infraestructura de Vercel Inc., que
        actúa como encargado del tratamiento en su condición de proveedor de
        alojamiento y procesa datos técnicos (dirección IP, registros de
        acceso al servidor) necesarios para servir la página.
      </p>
      <p>
        Ambos proveedores pueden estar ubicados fuera del Espacio Económico
        Europeo; en tal caso, la transferencia se realiza acogiéndose a las
        garantías previstas por el RGPD para transferencias internacionales
        (cláusulas contractuales tipo u otro mecanismo equivalente). No
        cedemos tus datos a ningún otro tercero salvo obligación legal.
      </p>

      <h2>Plazo de conservación</h2>
      <p>
        Conservamos los datos de la solicitud de reserva durante el tiempo
        necesario para gestionarla y, posteriormente, durante los plazos
        legalmente exigibles para atender eventuales responsabilidades.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad, escribiendo a{" "}
        <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>.
        También tienes derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer">
          www.aepd.es
        </a>
        ) si consideras que el tratamiento de tus datos no se ajusta a la
        normativa vigente.
      </p>
    </LegalPageShell>
  );
}
