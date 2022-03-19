import Image from "components/Image";
import { Project } from "interfaces/project";
import { StrapiData } from "interfaces/strapi";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CardProject = ({
  id,
  exclude,
  ...props
}: { exclude?: boolean } & StrapiData<Project>) => {
  const { slug, title, icon, tags, image, link_demo, content } =
    props.attributes;

  return (
    <div className="flex col-span-16 space-y-2 my-4 py-4 space-x-6">
      {!exclude && (
        <Link href={link_demo}>
          <a
            className="relative  bg-gray-200 group hover:cursor-pointer w-2/6 h-[170px]"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <Image
              src={image}
              className="scale-100 group-hover:scale-110 transition-all"
              alt="Logo"
              layout="fixed"
              objectFit="contain"
              width="198px"
              height="170px"
            />
            <span className="hidden group-hover:block font-semibold uppercase absolute bg-gray-900 p-2 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
              {" "}
              Ver demo
            </span>
          </a>
        </Link>
      )}
      <Link href={"/projects/" + slug}>
        <a
          className={`group ${
            exclude ? "w-full" : "w-4/6"
          } flex flex-col space-y-2 cursor-pointer`}
        >
          <div className="flex items-center space-x-2 ">
            {
              <div className="relative w-[24px] h-[24px]">
                <Image src={icon} alt="Logo" layout="fill" />
              </div>
            }
            <h3 className="font-semibold text-xl  group-hover:text-primary-400">
              {title}
            </h3>
          </div>
          <div className="flex flex-col space-y-2 ">
            <div className="flex space-x-2">
              {tags.data.length > 0 &&
                tags.data.map((tag) => (
                  <span
                    key={id + tag.id}
                    className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs"
                  >
                    {tag.attributes.title}
                  </span>
                ))}
            </div>
          </div>
          <div className={`line-clamp-${exclude ? '2' : '3'} text-sm text-gray-500`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
          <span className="text-gray-500 text-sm font-semibold group-hover:text-primary-400">
            Leer más...
          </span>
        </a>
      </Link>
    </div>
  );
};

export default CardProject;
