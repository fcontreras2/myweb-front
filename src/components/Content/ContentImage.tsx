import Image from "components/Image";
import { StrapiImage } from "interfaces/strapi";
import Link from "next/link";

type Props = {
  image: StrapiImage;
  link_demo?: string;
};

const ContentImage = ({ image, link_demo }: Props) => {
  return (
    <div className="relative">
      <Image
        src={image}
        layout="responsive"
        width={739}
        alt="Imagen post"
        height={"430px"}
      ></Image>
      {link_demo && (
        <Link href={link_demo}>
          <a
            className={`flex uppercase font-semibold mt-4 rounded-md items-center justify-center w-max  border-2  text-xs p-2 transition-all border-gray-300 text-gray-500 hover:border-primary-300 hover:text-primary-400`}
            target="_blank" rel="noopener noreferrer"
          >
            Ver demo
          </a>
        </Link>
      )}
    </div>
  );
};

export default ContentImage;
