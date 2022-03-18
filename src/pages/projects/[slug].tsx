import Link from "next/link";
import { useContext } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchAPI } from "lib/api";
import { StrapiData, StrapiPaginationData } from "interfaces/strapi";
import remarkGfm from "remark-gfm";
import MarkdownContent from "components/Markdown/MarkdownContent";
import { GlobalContext } from "pages/_app";
import Meta from "components/Meta";
import ContentTitle from "components/Content/ContentTitle";
import ContentImage from "components/Content/ContentImage";
import Layout from "shared/Layout";
import ContentAuthor from "components/Content/ContentAuthor";
import ContentRelatedPost from "components/Content/ContentRelatedPost";
import { Project } from "interfaces/project";

type Props = {
  project: StrapiData<Project>;
};

const Project: NextPage<Props> = ({ project }: Props) => {
  const { avatar } = useContext(GlobalContext);
    return (
    <>
      <Meta {...project.attributes.seo} />
      <Layout className="pt-32">
        <div className="col-span-16 lg:col-start-1 lg:col-end-12 flex flex-col space-y-8">
          <ContentTitle
            title={project.attributes.title}
            tags={project.attributes.tags}
          />
          {project.attributes.image && (
            <ContentImage image={project.attributes.image} />
          )}
          <article className="flex flex-col space-y-8 relative">
            <MarkdownContent remarkPlugins={[remarkGfm]}>
              {project.attributes.content}
            </MarkdownContent>
          </article>
        </div>
        <div className="col-span-16 lg:col-start-13 lg:col-span-6  h-max pt-16 lg:py-8 lg:pl-12 lg:pt-0 sticky top-32 space-y-2">
          <ContentAuthor
            avatar={avatar}
            createdAt={project.attributes.createdAt}
          />
          <ContentRelatedPost {...project} />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const projects: StrapiPaginationData<Project> = await fetchAPI(`/projects`, {
    populate: "*",
    "filters[slug][$eq]": `${(params as { slug: string }).slug}`,
  });

  return {
    props: { project: projects.data[0] },
    revalidate: 60,
    notFound: projects.data.length === 0,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: StrapiPaginationData<Project> = await fetchAPI("/projects", {
    populate: "*",
    _limit: "-1",
  });

  return {
    paths: projects.data.map((project) => ({
      params: { slug: project.attributes.slug },
    })),
    fallback: true,
  };
};

export default Project;
