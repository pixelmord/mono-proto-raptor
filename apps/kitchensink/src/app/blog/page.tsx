import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All about Kitchensink.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="mb-5 font-serif text-3xl font-bold">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.datePublished) > new Date(b.datePublished)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="mb-4 flex flex-col space-y-1" href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
        ))}
    </section>
  );
}
