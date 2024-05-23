import { ToggleThemeButton } from './ToggleThemeButton';
import myPicture from '../../public/assets/my-picture.jpg';
import Image from 'next/image';
import { Button } from './ui/button';
import { Github, LinkedinIcon, Twitter } from 'lucide-react';

export function Header() {
  return (
    <header className="flex max-w-5xl mx-auto justify-between p-4 items-center">
      <section className="flex flex-col space-y-2">
        <Image src={myPicture} alt="My picture" className="rounded-full w-16" />
        <div>
          <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Pedro Pereira
          </h1>
          <h2 className="text-sm text-muted-foreground tracking-tight">
            Web3 Software Developer
          </h2>
        </div>
        <div className="pt-4">
          <Button variant="ghost" size="icon">
            <LinkedinIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-6 w-6" />
          </Button>
        </div>
      </section>
      <ToggleThemeButton />
    </header>
  );
}
