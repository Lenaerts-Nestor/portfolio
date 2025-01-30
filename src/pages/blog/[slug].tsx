// src/pages/blog/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  tags: string[];
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function BlogPost({ title, content, date, tags }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{title} | My WPL Portfolio</title>
      </Head>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{title}</h1>
        <div className="text-gray-600">{date}</div>
        <div className="mt-4">
          {tags.map(tag => (
            <span key={tag} className="mr-2 bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8">{content}</div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Here you would fetch all possible blog post slugs
  // For now, we'll return an empty array
  return {
    paths: [],
    fallback: 'blocking'
  };
};


export const getStaticProps: GetStaticProps<BlogPostProps, Params> = async () => {
    // Remove params from parameters if not being used
    return {
      props: {
        title: 'Sample Blog Post',
        content: 'This is a sample blog post content.',
        date: new Date().toISOString(),
        tags: ['code', 'internship']
      }
    };
  };