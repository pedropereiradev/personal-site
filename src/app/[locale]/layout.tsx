import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { ContentSelector } from "@/components/ContentSelector";
import { Code2Icon } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pedropereiradev.com"),
  title: {
    default: "Pedro Pereira - Software Engineer",
    template: "%s | Pedro Pereira",
  },
  description:
    "Software Engineer with 3 years of experience in fintech, blockchain, and Web3. Experienced in technical leadership, full-stack development, and open-source contributions to Fuel Network.",
  keywords: [
    "Software Engineer",
    "Web3 Developer",
    "Blockchain",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Fuel Network",
    "Smart Contracts",
    "DeFi",
    "Fintech",
  ],
  authors: [{ name: "Pedro Pereira", url: "https://pedropereiradev.com" }],
  creator: "Pedro Pereira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pedropereiradev.com",
    title: "Pedro Pereira - Software Engineer",
    description:
      "Software Engineer specializing in Web3, blockchain, and full-stack development. Open-source contributor to Fuel Network.",
    siteName: "Pedro Pereira Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pedro Pereira - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Pereira - Software Engineer",
    description:
      "Software Engineer specializing in Web3, blockchain, and full-stack development.",
    creator: "@pedropereiradev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="max-w-5xl mx-auto tracking-tight min-h-screen">
              <Separator className="mb-4" />
              <ContentSelector />
              {children}
            </main>
            <footer className="max-w-5xl mx-auto tracking-tight">
              <Separator className="my-4" />
              <section className="flex flex-col items-center space-y-4 py-8 text-muted-foreground">
                <Code2Icon className="w-8 h-8" />
                <p className="text-center">
                  &copy;{new Date().getFullYear()} Pedro Pereira
                </p>
              </section>
            </footer>
          </ThemeProvider>
          <Toaster />
        </NextIntlClientProvider>
        <Analytics />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
