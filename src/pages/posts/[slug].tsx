import Link from "next/link";
import { useContext } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "lib/api";
import { StrapiData, StrapiPaginationData } from "interfaces/strapi";
import remarkGfm from "remark-gfm";
import MarkdownContent from "components/Markdown/MarkdownContent";
import { GlobalContext } from "pages/_app";
import { Post } from "interfaces/post";
import Meta from "components/Meta";
import ContentTitle from "components/Content/ContentTitle";
import ContentImage from "components/Content/ContentImage";
import Layout from "shared/Layout";
import ContentAuthor from "components/Content/ContentAuthor";
import ContentRelatedPost from "components/Content/ContentRelatedPost";

type Props = {
  post: StrapiData<Post>;
};

const Post: NextPage<Props> = ({ post }: Props) => {
  const { avatar } = useContext(GlobalContext);

  return (
    <>
      <Meta {...post.attributes.seo} />
      <Layout className="pt-32">
        <div className="col-span-16 lg:col-start-1 lg:col-end-12 flex flex-col space-y-8">
          <ContentTitle
            title={post.attributes.title}
            tags={post.attributes.tags}
          />
          {post.attributes.image && (
            <ContentImage image={post.attributes.image} />
          )}
          <article className="flex flex-col space-y-8 relative">
            <MarkdownContent remarkPlugins={[remarkGfm]}>
              {post.attributes.content}
            </MarkdownContent>
          </article>
        </div>
        <div className="col-span-16 lg:col-start-13 lg:col-span-6  h-max pt-16 lg:py-8 lg:pl-12 lg:pt-0 sticky top-32 space-y-2">
          <ContentAuthor
            avatar={avatar}
            createdAt={post.attributes.createdAt}
          />
          <ContentRelatedPost {...post} />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const posts: StrapiPaginationData<Post> = await fetchAPI(`/posts`, {
    populate: "*",
    "filters[slug][$eq]": `${(params as { slug: string }).slug}`,
  });

  return {
    props: { post: posts.data[0] },
    revalidate: 60,
    notFound: posts.data.length === 0,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: StrapiPaginationData<Post> = await fetchAPI("/posts", {
    populate: "*",
    _limit: "-1",
  });

  return {
    paths: posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    })),
    fallback: true,
  };
};

export default Post;
