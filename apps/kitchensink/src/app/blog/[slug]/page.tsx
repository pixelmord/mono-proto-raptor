import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/Mdx';
import { allBlogs } from 'contentlayer/generated';

// import Balancer from 'react-wrap-balancer';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, datePublished: publishedTime, summary: description, image, slug } = post;
  const ogImage = image
    ? `${process.env.NEXT_PUBLIC_VERCEL_URL}${image}`
    : `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      {/* <script type="application/ld+json">{JSON.stringify(post.structuredData)}</script> */}
      <h1 className="max-w-[650px] text-3xl font-bold">{post.title}</h1>
      <div className="mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          {post.datePublished}
        </div>
        <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
