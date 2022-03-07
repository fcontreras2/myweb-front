import type { NextPage } from "next";
import { fetchAPI } from "lib/api";
import Layout from "shared/Layout";
import { Post } from "interfaces/post";
import { StrapiPaginationData } from "interfaces/strapi";
import CardPost from "components/CardPost";

type Props = {
  posts: StrapiPaginationData<Post>;
};

const Posts: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <Layout
        className="pt-32"
        left={{
          title: "POSTS",
          pagination: posts.meta.pagination,
          component: posts.data.map((post) => (
            <CardPost key={post.attributes.slug + post.id + '1'} {...post} />
          )),
        }}
        right={{
          title: "PROJECTS",
          component: posts.data.map((post) => (
            <CardPost key={post.attributes.slug + post.id + '2'} {...post} />
          )),
        }}
      />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts] = await Promise.all([
    fetchAPI("/posts", { populate: { image: "*", tags: "*" } }),
  ]);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Posts;
