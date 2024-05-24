import Link from 'next/link';
import { ContactMeForm } from './contact-me-form';

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col space-y-8 tracking-tight">
      <section>
        <p className="text-muted-foreground">
          Feel free to reach out, I will get back to you as soon as possible.
          You can also find me on{' '}
          <Link
            href="https://linkedin.com/in/pedropereiradev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Linkedin
          </Link>
          .
        </p>
      </section>
      <section className="flex flex-col items-center py-6">
        <ContactMeForm />
      </section>
    </main>
  );
}
