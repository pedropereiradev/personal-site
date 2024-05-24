'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function ContentSelector() {
  const pathname = usePathname();

  return (
    <section className="flex md:space-x-2 mb-8 px-4 md:px-0">
      <Link href="/" passHref>
        <Button
          size="sm"
          variant={pathname === '/' ? 'default' : 'ghost'}
          className={clsx(
            'text-sm',
            pathname !== '/' && 'text-muted-foreground'
          )}
        >
          About
        </Button>
      </Link>
      <Link href="/posts" passHref>
        <Button
          size="sm"
          variant={pathname === '/posts' ? 'default' : 'ghost'}
          className={clsx(
            'text-sm',
            pathname !== '/posts' && 'text-muted-foreground'
          )}
        >
          Posts
        </Button>
      </Link>
      <Link href="/newsletter" passHref>
        <Button
          size="sm"
          variant={pathname === '/newsletter' ? 'default' : 'ghost'}
          className={clsx(
            'text-sm',
            pathname !== '/newsletter' && 'text-muted-foreground'
          )}
        >
          Newsletter
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button
          size="sm"
          variant={pathname === '/contact' ? 'default' : 'ghost'}
          className={clsx(
            'text-sm',
            pathname !== '/contact' && 'text-muted-foreground'
          )}
        >
          Contact
        </Button>
      </Link>
    </section>
  );
}
