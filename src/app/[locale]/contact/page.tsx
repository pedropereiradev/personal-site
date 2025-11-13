"use client";

import Link from 'next/link';
import { ContactMeForm } from './contact-me-form';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="max-w-5xl mx-auto flex flex-col space-y-8 tracking-tight">
      <section>
        <p className="text-muted-foreground px-4 md:px-0">
          {t.rich("intro", {
            linkedin: (chunks) => (
              <Link
                href="https://linkedin.com/in/pedropereiradev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </section>
      <section className="flex flex-col items-center py-6">
        <ContactMeForm />
      </section>
    </main>
  );
}
