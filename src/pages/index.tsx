import type { NextPage } from "next";
import { fetchAPI } from "lib/api";
import Layout from "shared/Layout";
import { Post } from "interfaces/post";
import { StrapiPaginationData } from "interfaces/strapi";
import CardPost from "components/CardPost";
import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "./_app";
import Meta from "components/Meta";

type Props = {
  posts: StrapiPaginationData<Post>;
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  const { seo } = useContext(GlobalContext);

  return (
    <>
      <Meta {...seo}/>
      <Layout
        showAvatar
        className="pt-16"
        link="/posts"
        left={{
          title: "POSTS",
          pagination: posts.meta.pagination,
          component: posts.data.map((post, i) => (
            <CardPost key={post.attributes.slug + post.id + i} {...post} />
          )),
        }}  
        right={{
          title: "PROJECTS",
          component: posts.data.map((post, i) => (
            <CardPost
              key={post.attributes.slug + post.id + "2" + i}
              {...post}
            />
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

export default Home;
