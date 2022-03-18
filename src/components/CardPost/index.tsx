import { Post } from "interfaces/post";
import { StrapiData } from "interfaces/strapi";
import getDay from "lib/days";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CardPost = ({
  id,
  exclude,
  ...props
}: { exclude?: boolean } & StrapiData<Post>) => {
  const { slug, title, content, createdAt, tags } = props.attributes;
  return (
    <Link href={"/posts/" + slug}>
      <a className="group col-span-16 flex flex-col space-y-2 my-4 py-4 cursor-pointer">
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
        {!exclude && (
          <div className="line-clamp-3 text-sm text-gray-500">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
        <span className="text-gray-700 text-sm font-semibold group-hover:text-primary-400">
          Continuar...
        </span>
      </a>
    </Link>
  );
};

export default CardPost;
