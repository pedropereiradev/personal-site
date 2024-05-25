import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import { ContentSelector } from '@/components/ContentSelector';
import { Code2Icon } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Pedro Pereira',
  description: 'Personal portfolio where i share my projects and ideas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
