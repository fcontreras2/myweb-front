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
import { Project } from "interfaces/project";
import CardProject from "components/CardProject";

type Props = {
  posts: StrapiPaginationData<Post>;
  projects: StrapiPaginationData<Project>;
};

const Home: NextPage<Props> = ({ posts, projects }: Props) => {
  const { seo } = useContext(GlobalContext);

  return (
    <>
      <Meta {...seo} />
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
          title: "PROYECTOS",
          component: projects.data.map((project, i) => (
            <CardProject
              key={project.attributes.slug + project.id + "2" + i}
              {...project}
            />
          )),
        }}
      />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, projects] = await Promise.all([
    fetchAPI("/posts", { populate: { image: "*", tags: "*" } }),
    fetchAPI("/projects", {
      populate: { image: "*", tags: "*", icon: "*" },
      pagination: {
        pageSize: 3,
      },
    }),
  ]);

  return {
    props: {
      posts,
      projects
    },
    revalidate: 1,
  };
}

export default Home;
