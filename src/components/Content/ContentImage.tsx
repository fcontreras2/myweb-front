import Image from "components/Image";
import { Avatar } from "interfaces/global";
import { StrapiImage } from "interfaces/strapi";

type Props = {
  image: StrapiImage;
};

const ContentImage = ({ image }: Props) => {
  return (
    <div className="relative">
      <Image
        src={image}
        layout="responsive"
        width={739}
        alt="Imagen post"
        height={"430px"}
      ></Image>
    </div>
  );
};

export default ContentImage;
