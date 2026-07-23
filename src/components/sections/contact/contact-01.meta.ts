import type { ComponentMeta } from "@/registry/types";

const meta: ComponentMeta = {
  family: "contact",
  id: "contact-01",
  name: "Contact 01",
  description:
    "Section contact deux colonnes : coordonnées (adresse, horaires, téléphone, email) et formulaire de réservation accessible avec retour toast.",
  tags: ["contact", "réservation", "formulaire", "horaires", "carte", "form"],
  useCases: ["restaurant", "réservation", "local", "service"],
  responsive: true,
  animated: true,
  dependencies: ["sonner"],
  status: "stable",
  createdAt: "2026-07-22",
};

export default meta;
