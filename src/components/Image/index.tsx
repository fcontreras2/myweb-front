import NextImage, { ImageProps } from "next/image";
import { getStrapiMedia } from "lib/media";
import { StrapiImage } from "interfaces/strapi";

const Image = ({
  src,
  width,
  height,
  alt,
  ...props
}: Omit<ImageProps, "src"> & { src: StrapiImage | string }) => {
  return (
    <NextImage
      width={width}
      height={height}
      src={"https://www.svgrepo.com/show/106361/user-online.svg"}
      alt={alt || ""}
      {...props}
    />
  );
};

export default Image;
