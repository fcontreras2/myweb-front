import NextImage, { ImageProps } from "next/image";
import { getStrapiMedia } from "lib/media";
import { StrapiImage } from "interfaces/strapi";
import { useMemo } from "react";

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
      src={typeof src === 'string' ? ( process.env.NEXT_PUBLIC_STRAPI_API_URL +  src) : getStrapiMedia((src as StrapiImage))}
      alt={alt || ""}
      {...props}
    />
  );
};

export default Image;
