"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const mounted = useMounted();
  const t = useTranslations("cookieBanner");
  const [dismissed, setDismissed] = useState(false);

  function respond(choice: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, choice);
    setDismissed(true);
  }

  if (!mounted || dismissed || localStorage.getItem(STORAGE_KEY)) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label={t("ariaLabel")}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur-md",
        "p-4 sm:p-5",
      )}
    >
      <div className="container-content flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="max-w-2xl text-center text-sm text-neutral-700 sm:text-left">
          {t("message")}{" "}
          <NavLink
            href="/cookies"
            className="text-primary underline underline-offset-2"
          >
            {t("more")}
          </NavLink>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-neutral-300 bg-white text-neutral-950 hover:bg-neutral-100 hover:text-neutral-950"
            onClick={() => respond("rejected")}
          >
            {t("reject")}
          </Button>
          <Button type="button" size="sm" onClick={() => respond("accepted")}>
            {t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
