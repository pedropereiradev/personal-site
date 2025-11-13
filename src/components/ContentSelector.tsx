"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";

export function ContentSelector() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();

  const isActive = (path: string) => {
    const localePath = `/${locale}${path}`;
    return pathname === localePath;
  };

  return (
    <section className="flex md:space-x-2 mb-8 px-4 md:px-0">
      <Link href={`/${locale}`} passHref>
        <Button
          size="sm"
          variant={isActive("") ? "default" : "ghost"}
          className={clsx("text-sm", !isActive("") && "text-muted-foreground")}
        >
          {t("about")}
        </Button>
      </Link>
      <Link href={`/${locale}/posts`} passHref>
        <Button
          size="sm"
          variant={isActive("/posts") ? "default" : "ghost"}
          className={clsx(
            "text-sm",
            !isActive("/posts") && "text-muted-foreground",
          )}
        >
          {t("posts")}
        </Button>
      </Link>
      <Link href={`/${locale}/newsletter`} passHref>
        <Button
          size="sm"
          variant={isActive("/newsletter") ? "default" : "ghost"}
          className={clsx(
            "text-sm",
            !isActive("/newsletter") && "text-muted-foreground",
          )}
        >
          {t("newsletter")}
        </Button>
      </Link>
      <Link href={`/${locale}/contact`} passHref>
        <Button
          size="sm"
          variant={isActive("/contact") ? "default" : "ghost"}
          className={clsx(
            "text-sm",
            !isActive("/contact") && "text-muted-foreground",
          )}
        >
          {t("contact")}
        </Button>
      </Link>
    </section>
  );
}
