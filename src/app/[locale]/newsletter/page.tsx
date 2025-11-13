"use client";

import { useTranslations } from "next-intl";

export default function Newsletter() {
  const t = useTranslations("newsletter");

  return (
    <main className="max-w-5xl mx-auto my-auto mt-4 px-4 md:px-0">
      <section className="flex justify-center">
        <p className="text-lg text-muted-foreground max-w-96 text-justify">
          {t("description")}
        </p>
      </section>
    </main>
  );
}
