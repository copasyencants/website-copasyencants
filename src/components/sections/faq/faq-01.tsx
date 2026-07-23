import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/effects/reveal";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FaqItem[];
}

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "Comment fonctionne la personnalisation ?",
    answer:
      "Tout le style se pilote depuis les tokens du design system : couleurs, typographie, espacements et rayons.",
  },
  {
    question: "Est-ce responsive ?",
    answer:
      "Oui, chaque composant est pensé mobile-first et s'adapte à toutes les tailles d'écran.",
  },
  {
    question: "Puis-je réutiliser les composants ?",
    answer:
      "Absolument : ils sont indépendants, typés et personnalisables via leurs props.",
  },
];

/**
 * FAQ 01 — questions fréquentes en accordéon accessible (une seule ouverte à
 * la fois). Convient à toute page nécessitant de lever des objections.
 */
export function Faq01({
  className,
  eyebrow = "FAQ",
  title = "Questions fréquentes",
  description = "Vous ne trouvez pas votre réponse ? Contactez-nous, on vous répond vite.",
  items = DEFAULT_ITEMS,
  ...props
}: Faq01Props) {
  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {eyebrow ? (
            <Reveal>
              <p className="text-brand text-sm font-medium tracking-widest uppercase">
                {eyebrow}
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h2 className="text-h2 font-heading font-semibold text-balance">
              {title}
            </h2>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-lg text-pretty">
                {description}
              </p>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-pretty">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
