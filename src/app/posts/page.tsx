export default function Posts() {
  const posts = [];

  if (posts.length === 0) {
    return (
      <main className="max-w-5xl mx-auto my-auto mt-4">
        <section className='flex justify-center'>
          <p className="text-lg text-muted-foreground max-w-96 text-justify">
            There are no posts yet. Please, come back later or subscribe for the newsletter to be notified
            when a post is made.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto">
      <h1>Posts</h1>
    </main>
  );
}
