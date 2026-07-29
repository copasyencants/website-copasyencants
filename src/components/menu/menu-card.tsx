import Image from "next/image";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/effects/reveal";

export interface MenuCardProps {
  name: string;
  description?: string;
  price: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function MenuCard({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  className,
}: MenuCardProps) {
  return (
    <Reveal>
      <article
        className={cn(
          "group bg-card border-border/60 flex min-h-28 overflow-hidden rounded-xl border text-neutral-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md",
          className,
        )}
      >
        {imageSrc ? (
          <div className="bg-muted relative aspect-square w-24 shrink-0 overflow-hidden sm:w-28">
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              fill
              sizes="(min-width: 640px) 112px, 96px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ) : null}
        <div className="flex min-w-0 flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h4 className="font-heading text-lg font-semibold leading-tight">
                {name}
              </h4>
            </div>
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">
              {price}
            </span>
          </div>
          {description ? (
            <p className="text-sm leading-relaxed text-neutral-600 text-pretty">
              {description}
            </p>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
