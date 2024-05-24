import { ToggleThemeButton } from './ToggleThemeButton';
import myPicture from '../../public/assets/my-picture.jpg';
import Image from 'next/image';
import { Button } from './ui/button';
import { Github, LinkedinIcon, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex max-w-5xl mx-auto justify-between p-4 items-center tracking-tight">
      <section className="flex flex-col space-y-2">
        <section className="flex items-center gap-4">
          <Image
            src={myPicture}
            alt="My picture"
            className="rounded-full w-16"
          />
          <div>
            <h1 className="scroll-m-20 text-xl font-semibold">Pedro Pereira</h1>
            <h2 className="text-sm text-muted-foreground">
              Web3 Software Developer
            </h2>
          </div>
        </section>
        <div className="pt-4">
          <Link
            href="https://linkedin.com/in/pedropereiradev"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <LinkedinIcon className="h-6 w-6" />
            </Button>
          </Link>
          <Link
            href="https://github.com/pedropereiradev"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
          <Link
            href="https://x.com/pedropereiradev"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Twitter className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
      <ToggleThemeButton />
    </header>
  );
}
