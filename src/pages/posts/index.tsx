import { useContext } from "react";
import type { NextPage } from "next";
import Meta from "components/Meta";
import { fetchAPI } from "lib/api";
import Layout from "shared/Layout";
import { Post } from "interfaces/post";
import { StrapiPaginationData } from "interfaces/strapi";
import CardPost from "components/CardPost";
import { Project } from "interfaces/project";
import CardProject from "components/CardProject";
import { GlobalContext } from "pages/_app";

type Props = {
  posts: StrapiPaginationData<Post>;
  projects: StrapiPaginationData<Project>;
};

const Posts: NextPage<Props> = ({ posts, projects }: Props) => {
  const { seo } = useContext(GlobalContext);

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

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, projects] = await Promise.all([
    fetchAPI("/posts", {
      populate: { image: "*", tags: "*" },
      pagination: {
        pageSize: 7,
      },
    }),
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
    },
    revalidate: 1,
  };
}

export default Posts;
