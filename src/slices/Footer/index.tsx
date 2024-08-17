import { Separator } from '@/components/ui/separator';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { GithubIcon, GlobeIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-20 dark:border-stone-700 flex flex-col justify-end text-stone-700 dark:text-stone-300"
    >
      <section className="flex gap-5 justify-end items-center mr-6">
        {slice.primary.social_network.map((link, index) => {
          if (link.social_network_link.url.includes('linkedin')) {
            return (
              <Link
                key={index}
                href={link.social_network_link.url}
                target={link.social_network_link.target || '_self'}
              >
                <LinkedinIcon />
              </Link>
            );
          }
          if (link.social_network_link.url.includes('github')) {
            return (
              <Link
                key={index}
                href={link.social_network_link.url}
                target={link.social_network_link.target || '_self'}
              >
                <GithubIcon />
              </Link>
            );
          }
          if (link.social_network_link.url.includes('https://x.com')) {
            return (
              <Link
                key={index}
                href={link.social_network_link.url}
                target={link.social_network_link.target || '_self'}
              >
                <TwitterIcon />
              </Link>
            );
          }

          return (
            <Link
              key={index}
              href={link.social_network_link.url}
              target={link.social_network_link.target || '_self'}
            >
              <GlobeIcon />
            </Link>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;
