'use client';

import { truncateText } from '@/utils/truncateText';
import { AllDocumentTypes } from '../../../../prismicio-types';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';

interface Props {
  post: AllDocumentTypes;
}

export function Article({ post }: Props) {
  const router = useRouter();

  return (
    <article
      key={post.id}
      onClick={() => router.push(post.url || '')}
      className="cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-900 p-6 rounded-lg transition-colors duration-200"
    >
      <section className="flex flex-col md:flex-row items-center gap-6">
        {post.data.meta_image.url ? (
          <Image
            src={post.data.meta_image.url}
            alt={post.data.meta_image.alt ?? ''}
            width={post.data.meta_image.dimensions.width}
            height={post.data.meta_image.dimensions.height}
            className="w-full md:w-40 rounded-md mb-4 md:mb-0 md:ml-4 shadow-md"
          />
        ) : (
          <Skeleton className="w-full md:w-40 h-28 mb-4 md:mb-0 md:ml-4" />
        )}
        <section className="flex-1">
          <h2 className="scroll-m-20 text-lg font-extrabold tracking-tight md:text-2xl mb-3">
            {post.data.meta_title}
          </h2>
          <p className="leading-7">
            {truncateText(post.data.meta_description)}
          </p>
        </section>
      </section>
    </article>
  );
}
