import { StrapiPopulate } from "interfaces/strapi";
import { Tag } from "interfaces/tag";

type Props = {
  title: string;
  tags: StrapiPopulate<Tag>;
};

const ContentTitle = ({ title, tags }: Props) => {
  return (
    <div className="block">
      <h1 className="text-3xl font-semibold">{title}</h1>

      <div className="flex space-x-2 mt-2">
        {tags?.data?.map((tag, i) => (
          <span
            key={i + tag.id}
            className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs"
          >
            {tag.attributes.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContentTitle;
