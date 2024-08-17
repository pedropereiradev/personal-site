import { createClient } from '@/prismicio';
import { Article } from './components/Article';

export default async function Posts() {
  const client = createClient();

  const posts = await client.getAllByType('blog_post', {
    orderings: [
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  });

  if (posts.length === 0) {
    return (
      <main className="max-w-5xl mx-auto my-auto mt-4 px-4 md:px-0">
        <section className="flex justify-center">
          <p className="text-lg text-muted-foreground max-w-96 text-justify">
            There are no posts yet. Please, come back later or subscribe for the
            newsletter to be notified when a post is made.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto text-stone-700 dark:text-stone-300">
      <section>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
