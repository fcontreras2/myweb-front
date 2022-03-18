import type { NextPage } from "next";
import { fetchAPI } from "lib/api";
import Layout from "shared/Layout";
import { Post } from "interfaces/post";
import { StrapiPaginationData } from "interfaces/strapi";
import { useContext } from "react";
import { GlobalContext } from "../_app";
import Meta from "components/Meta";
import { Project } from "interfaces/project";
import CardProject from "components/CardProject";
import CardPost from "components/CardPost";

type Props = {
  posts: StrapiPaginationData<Post>;
  projects: StrapiPaginationData<Project>;
};

const Projects: NextPage<Props> = ({ posts, projects }: Props) => {
  const { seo } = useContext(GlobalContext);

  return (
    <>
      <Meta {...seo} />
      <Layout
        className="pt-32 min-h-[46vw]"
        left={{
          title: "PROYECTOS",
          pagination: projects.meta.pagination,
          component:
            projects.data.length === 0 ? (
              <p> Sin resultados</p>
            ) : (
              projects.data.map((project, i) => (
                <CardProject
                  key={project.attributes.slug + project.id + i}
                  {...project}
                />
              ))
            ),
        }}
        right={{
          title: "POSTS",
          component:
            posts.data.length === 0 ? (
              <p className="pt-8"> Sin resultados</p>
            ) : (
              posts.data.map((post, i) => (
                <CardPost
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
      populate: {
        image: "*",
        tags: "*",
      },
      pagination: {
        pageSize: 3,
      },
    }),
    fetchAPI("/projects", { populate: { image: "*", tags: "*", icon: "*" } }),
  ]);

  return {
    props: {
      posts,
      projects,
    },
    revalidate: 1,
  };
}

export default Projects;
