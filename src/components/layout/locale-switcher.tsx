"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<string, string> = {
  es: "ES",
  en: "EN",
  ca: "CA",
};

export interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "border-border/60 flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-semibold",
        className,
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            loc === locale
              ? "!bg-[#008C45] text-white hover:!bg-[#007A3B]"
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {LOCALE_LABELS[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
