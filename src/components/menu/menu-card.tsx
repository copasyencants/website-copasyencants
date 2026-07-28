import { cn } from "@/lib/utils";
import { Reveal } from "@/components/effects/reveal";

export interface MenuCardProps {
  name: string;
  description?: string;
  price: string;
  className?: string;
}

export function MenuCard({
  name,
  description,
  price,
  className,
}: MenuCardProps) {
  return (
    <Reveal>
      <article
        className={cn(
          "bg-card border-border/60 flex min-h-28 flex-col gap-3 rounded-xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md",
          className,
        )}
      >
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
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
            {description}
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}
