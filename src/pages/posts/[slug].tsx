import { useContext } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "shared/Layout";
import { fetchAPI } from "lib/api";
import { Post } from "interfaces/post";
import { StrapiData, StrapiPaginationData } from "interfaces/strapi";
import remarkGfm from "remark-gfm";
import MarkdownContent from "components/Markdown/MarkdownContent";
import getDay from "lib/days";
import { GlobalContext } from "pages/_app";
import LinkedIn from "icons/linkedin.svg";
import Github from "icons/github.svg";
import ReactMarkdown from "react-markdown";
import Image from "components/Image";
import Link from "next/link";

type Props = {
  post: StrapiData<Post>;
};

const Post: NextPage<Props> = ({ post }: Props) => {
  
  const { avatar } = useContext(GlobalContext);

  if (!post) return null;
  
  return (
    <>
      <Layout className="pt-32">
        <div className="col-span-16 lg:col-start-1 lg:col-end-11 flex flex-col space-y-8">
          <div className="">
            <h1 className="text-3xl font-semibold">{post.attributes.title}</h1>

            <div className="flex space-x-2 mt-2">
              {post.attributes.tags.data.map((tag, i) => (
                <span
                  key={i + tag.id}
                  className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs"
                >
                  {tag.attributes.title}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={post.attributes.image}
              layout="responsive"
              width={739}
              alt="Imagen post"
              height={"430px"}
            ></Image>
          </div>
          <article className="flex flex-col space-y-8 relative">
            <MarkdownContent remarkPlugins={[remarkGfm]}>
              {post.attributes.content}
            </MarkdownContent>
          </article>
        </div>
        <div className="col-span-16 lg:col-start-13 lg:col-span-4  h-max py-8 pl-12 pt-0 sticky top-32 space-y-2">
          <div className="rounded-full w-[100px] h-[100px] overflow-hidden relative border-2 mb-6">
            <Image
              src={avatar.image}
              alt="Avatar fcontreras2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-medium border-b-2 w-[70%] border-b-primary-300">
            <strong className="font-semibold">Freddy Contreras</strong>
          </h3>
          <p className="font-medium m-0 text-sm">
            {getDay(post.attributes.createdAt)}
          </p>
          <div className="flex space-x-2">
            <LinkedIn fill="#c1c1c1" width={"20px"} height={"20px"} />
            <Github fill="#c1c1c1" width={"20px"} height={"20px"} />
          </div>
          <h4 className="font-semibold pt-12 border-b-2 w-[70%] border-b-primary-300">
            Relacionados
          </h4>
          {Array(3)
            .fill(2)
            .map((i) => (
              <Link href={"/"} key={"related-" + i}>
                <a className="group flex space-x-4 pt-4">
                  <div className="relative w-[40px] h-[40px]">
                    <Image
                      src={post.attributes.image}
                      objectFit="cover"
                      layout="fill"
                      alt="Avatar fcontreras2"
                    />
                  </div>
                  <div className="relative w-4/5">
                    <h6 className="line-clamp-1 text-xs font-semibold group-hover:text-primary-400">
                      {post.attributes.title}
                    </h6>
                    <ReactMarkdown className="line-clamp-2 font-thin text-xs">
                      {post.attributes.content}
                    </ReactMarkdown>
                    <span className="text-primary-400 text-xs font-semibold">
                      Continuar...
                    </span>
                  </div>
                </a>
              </Link>
            ))}

          <div className=" hidden lg:block absolute  h-screen -top-32 w-[1px] bg-gray-200 left-0"></div>
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
