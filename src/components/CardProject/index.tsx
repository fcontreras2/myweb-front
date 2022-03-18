import Image from "components/Image";
import { Project } from "interfaces/project";
import { StrapiData } from "interfaces/strapi";
import Link from "next/link";

const CardProject = ({ id, ...props }: StrapiData<Project>) => {
  const { slug, title, icon, tags } = props.attributes;

  return (
    <Link href={"/projects/" + slug}>
      <a className="group col-span-16 flex flex-col space-y-2 my-4 py-4 cursor-pointer">
        <div className="flex items-center space-x-2">
          {
            <div className="relative w-[24px] h-[24px]">
              <Image
                src={icon}
                alt="Logo"
                layout="fill"
              />
            </div>
          }
          <h3 className="font-semibold text-xl group-hover:text-primary-400">
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
      </a>
    </Link>
  );
};

export default CardProject;
