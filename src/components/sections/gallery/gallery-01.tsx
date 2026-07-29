"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/lib/component-types";
import { Reveal } from "@/components/effects/reveal";

export interface GalleryImage {
  src: string;
  alt: string;
  /** Classe de placement dans la grille (col/row-span). */
  area?: string;
}

export interface Gallery01Props extends SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  images?: GalleryImage[];
}

const DEFAULT_IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=80",
    alt: "Pizza italiana recien horneada",
    area: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    alt: "Pizza Margherita con mozzarella y albahaca",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    alt: "Interior acogedor de restaurante italiano",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    alt: "Mesa italiana con platos para compartir",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
    alt: "Cocinero preparando platos en restaurante",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1200&q=80",
    alt: "Pizza artesanal servida en mesa de restaurante",
    area: "sm:col-span-2",
  },
];

/**
 * Gallery 01 - galerie editoriale en grille asymetrique (tuiles de tailles
 * variables), zoom doux au survol et legende au focus. Fond ambiance
 * restaurant / produit / lieu.
 */
export function Gallery01({
  className,
  eyebrow = "Galeria",
  title = "El fuego, la mesa, el momento",
  description = "Un vistazo a nuestros platos, nuestros ingredientes y el ambiente que te espera en sala y terraza.",
  images = DEFAULT_IMAGES,
  ...props
}: Gallery01Props) {
  return (
    <section className={cn("section container-content", className)} {...props}>
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        {eyebrow ? (
          <Reveal>
            <p className="text-primary text-sm font-medium tracking-widest uppercase">
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

      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
        {images.map((image, i) => (
          <Reveal
            key={image.src}
            delay={0.04 * i}
            className={cn("h-full", image.area)}
          >
            <figure className="group bg-muted relative h-full w-full overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
