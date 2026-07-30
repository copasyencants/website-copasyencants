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
    title: "Aviso Legal",
    description:
      "Información legal del titular del sitio web de Copas y Encants, conforme a la LSSI-CE.",
    path: "/aviso-legal",
    locale,
  });
}

export default async function AvisoLegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LegalPageShell locale={locale} title="Aviso Legal" updated="30/07/2026">
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se facilitan los siguientes datos de identificación del
        titular de este sitio web:
      </p>

      <ul>
        <li>
          <strong>Titular:</strong> {legalEntity.fullName}
        </li>
        <li>
          <strong>NIF:</strong> {legalEntity.nif}
        </li>
        <li>
          <strong>Nombre comercial:</strong> {legalEntity.tradeName}
        </li>
        <li>
          <strong>Domicilio:</strong> {legalEntity.address}
        </li>
        <li>
          <strong>Correo electrónico:</strong> {legalEntity.email}
        </li>
        <li>
          <strong>Teléfono:</strong> {legalEntity.phone}
        </li>
        <li>
          <strong>Actividad:</strong> Restauración (pizzería y bar de cócteles)
        </li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web tiene como finalidad informar sobre la carta,
        actividad, horarios y datos de contacto de {legalEntity.tradeName}, así
        como permitir la solicitud de reservas de mesa a través de un
        formulario de contacto.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de usuario y
        conlleva la aceptación de las condiciones aquí recogidas. El usuario se
        compromete a hacer un uso adecuado de los contenidos y servicios
        ofrecidos, y a no emplearlos para incurrir en actividades ilícitas o
        contrarias a la buena fe y al orden público.
      </p>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        Los textos, imágenes, marcas, logotipos y demás contenidos de este
        sitio web son propiedad de {legalEntity.fullName} o de terceros que han
        autorizado su uso, y están protegidos por la normativa de propiedad
        intelectual e industrial. Queda prohibida su reproducción, distribución
        o comunicación pública sin autorización expresa.
      </p>

      <h2>Enlaces a terceros</h2>
      <p>
        Este sitio web incluye enlaces a plataformas de terceros (por ejemplo
        Glovo, Uber Eats, Google Maps o Instagram) sobre cuyos contenidos y
        políticas {legalEntity.tradeName} no tiene control ni responsabilidad
        alguna.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para
        cualquier controversia derivada del uso de este sitio web, las partes
        se someten a los Juzgados y Tribunales de Barcelona, salvo que la
        normativa de consumidores y usuarios establezca otro fuero.
      </p>
    </LegalPageShell>
  );
}
