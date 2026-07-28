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
          "bg-card border border-border/40 rounded-xl p-5 flex flex-col gap-3 hover:border-primary/30 transition-colors",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-lg font-semibold leading-tight">
              {name}
            </h4>
          </div>
          <span className="bg-primary/10 text-primary font-bold whitespace-nowrap px-3 py-1 rounded-lg text-sm">
            {price}
          </span>
        </div>
        {description ? (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}
