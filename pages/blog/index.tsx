import { Layout } from '../../components/layout/Layout';
import { PostsListing } from '../../components/blog/postsListing/PostsListing';
import { Heading } from '../../components/shared/components/heading/Heading';
import { Navigation } from '../../components/navigation/Navigation';
import { Blog } from '../../components/blog/Blog';
import { getAllPosts } from '../../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

const categoriesArr = [
  { title: 'TypeScript', path: '/kategorie/typescript' },
  { title: 'Jest', path: '/kategorie/jest' },
  { title: 'JavaScript', path: '/kategorie/javascript' },
  { title: 'Dostępność', path: '/kategorie/dostepnosc' },
  { title: 'React', path: '/kategorie/react' },
  { title: 'CSS', path: '/kategorie/css' },
  { title: 'Svelte', path: '/kategorie/svelte' },
  { title: 'GraphQL', path: '/kategorie/graphql' },
  { title: 'Firebase', path: '/kategorie/firebase' },
  { title: 'Inne', path: '/kategorie/inne' },
  { title: 'DevOps', path: '/kategorie/devops' },
  { title: 'Webpack', path: '/kategorie/webpack' },
];

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

const title = 'Frontlive.pl - Blog';
const description = 'Najbardziej konkretne artykuły dla frontend developerów!';
const url = 'https://frontlive.pl/blog';

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Layout>
        <Navigation />
        <Blog posts={posts} categories={categoriesArr} />
      </Layout>
    </>
  );
}
