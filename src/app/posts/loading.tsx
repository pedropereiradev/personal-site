import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto my-auto mt-4 px-4 md:px-0">
      <section>
        <Skeleton className="w-full h-56 mb-8" />
        <Skeleton className="w-full h-56 mb-8" />
        <Skeleton className="w-full h-56 mb-8" />
        <Skeleton className="w-full h-56 mb-8" />
      </section>
    </main>
  );
}
