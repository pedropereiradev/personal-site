import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='mb-10'
    >
      {slice.primary.banner.url && (
        <Image
          alt={slice.primary.banner.alt || ''}
          src={slice.primary.banner.url}
          width={slice.primary.banner.dimensions?.width || 1920}
          height={slice.primary.banner.dimensions?.height || 1080}
          className="rounded-lg object-cover max-h-96"
        />
      )}
      <section className="flex items-center justify-end gap-3 my-3 mr-3">
        <Avatar>
          <AvatarFallback>
            {(slice?.primary?.author && slice.primary.author[0]) || 'U'}
          </AvatarFallback>
        </Avatar>
        <section>
          <p className="text-stone-600 dark:text-stone-400">
            {slice.primary.author}
          </p>
          <p className="text-stone-300 dark:text-stone-700 text-sm">
            {slice.primary.created_at &&
              new Date(slice.primary.created_at).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
          </p>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
