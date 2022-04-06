import { useContext } from "react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Meta from "components/Meta";
import { fetchAPI } from "lib/api";
import Layout from "shared/Layout";
import { Post } from "interfaces/post";
import { StrapiPaginationData } from "interfaces/strapi";
import CardPost from "components/CardPost";
import { Project } from "interfaces/project";
import CardProject from "components/CardProject";
import { GlobalContext } from "pages/_app";
import { useRouter } from "next/router";

type Props = {
  posts: StrapiPaginationData<Post>;
  projects: StrapiPaginationData<Project>;
};

const Posts: NextPage<Props> = ({ projects, posts }: Props) => {
  const { seo } = useContext(GlobalContext);
  console.log("posts", posts);
  return (
    <>
      <Meta {...seo} />
      <Layout
        className="pt-32"
        linkRight="/projects"
        pagination
        left={{
          title: "POSTS",
          pagination: posts.meta.pagination,
          component: posts.data.map((post) => (
            <CardPost key={post.attributes.slug + post.id + "1"} {...post} />
          )),
        }}
        right={{
          title: "PROYECTOS",
          component:
            projects.data.length === 0 ? (
              <p className="pt-8"> Sin resultados</p>
            ) : (
              projects.data.map((post, i) => (
                <CardProject
                  exclude
                  key={post.attributes.slug + post.id + "2" + i}
                  {...post}
                />
              ))
            ),
        }}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const { page } = query;

  // Run API calls in parallel
  const [posts, projects] = await Promise.all([
    fetchAPI(
      "/posts",
      {
        populate: { image: "*", tags: "*" },
        pagination: {
          page: page || 1 ,
          pageSize: 3
        }
      },
      {
        encodeValuesOnly: true,
      }
    ),
    fetchAPI("/projects", {
      populate: { image: "*", tags: "*", icon: "*" },
      "filters[important][$eq]": true,
      pagination: {
        pageSize: 3,
      },
    }),
  ]);

  return {
    props: {
      posts,
      projects,
    }
  };
}

export default Posts;
