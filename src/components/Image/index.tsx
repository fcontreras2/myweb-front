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
      src={typeof src === "string" ? (process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : process.env.NEXT_PUBLIC_STRAPI_API_URL) +  src : getStrapiMedia(src as StrapiImage) as string}
      alt={alt || ""}
      {...props}
    />
  );
};

export default Image;
