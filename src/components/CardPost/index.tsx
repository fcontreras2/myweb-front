import { Post } from "interfaces/post";
import { StrapiData } from "interfaces/strapi";
import getDay from "lib/days";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CardPost = ({ id, ...props }: StrapiData<Post>) => {
  const { slug, title, content, createdAt, tags } = props.attributes;
  return (
    <Link href={"/posts/" + slug}>
      <a className="group w-full flex flex-col space-y-2 my-10 border-2 px-8 py-10 cursor-pointer hover:shadow-md">
        <h3 className="font-semibold text-xl group-hover:text-primary-400">
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-normal text-xs text-gray-10">
            {getDay(createdAt)}
          </span>
          {tags.data.map((tag) => (
            <span
              key={id + tag.id}
              className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs"
            >
              {tag.attributes.title}
            </span>
          ))}
        </div>
        <div className="line-clamp-3 text-sm text-gray-500">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
        <span className="text-primary-400 text-sm font-semibold">
          Continuar...
        </span>
      </a>
    </Link>
  );
};

export default CardPost;
