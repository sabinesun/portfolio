"use client";

import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

type Locale = (typeof routing)["locales"][number];

const isLocale = (value: string): value is Locale =>
  routing.locales.some((supportedLocale) => supportedLocale === value);

export const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("language-toggle");

  const currentLocale: Locale = isLocale(locale) ? locale : routing.locales[0];

  const getNextLocale = (): Locale => {
    if (routing.locales.length <= 1) {
      return currentLocale;
    }

    const currentIndex = routing.locales.indexOf(currentLocale);
    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % routing.locales.length;
    return routing.locales[nextIndex] ?? routing.locales[0];
  };

  const handleToggle = () => {
    const nextLocale = getNextLocale();
    if (nextLocale === currentLocale) {
      return;
    }

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      aria-label={t("sr-label")}
      className="w-9"
      onClick={handleToggle}
      variant="ghost"
    >
      {t(`locales.${currentLocale}`)}
    </Button>
  );
};
