import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "components/Image";
import { Post } from "interfaces/post";
import { StrapiPopulate } from "interfaces/strapi";

const ContentRelatedPost = (posts: StrapiPopulate<Post>) => {
  return (
    <>
      {posts?.data?.length > 0 && (
        <>
          <h4 className="font-semibold pt-12 border-b-2 w-[70%] border-b-primary-300">
            Relacionados
          </h4>
          {posts.data.map((post, i) => (
            <Link href={"/posts/" + post.attributes.slug} key={"related-" + i}>
              <a className="group flex space-x-4 pt-4">
                <div className="relative  w-[40px] h-[40px]">
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
                    Leer más...
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </>
      )}
      {/* <div className=" hidden lg:block absolute  h-screen -top-32 w-[1px] bg-gray-200 left-0"></div> */}
    </>
  );
};

export default ContentRelatedPost;
