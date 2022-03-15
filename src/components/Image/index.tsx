import NextImage, { ImageProps } from "next/image";
import { getStrapiMedia } from "lib/media";
import { StrapiImage } from "interfaces/strapi";
import { useMemo } from "react";

const Image = ({
  src,
  ...props
}: Omit<ImageProps, "src"> & { src: StrapiImage | string }) => {
  const srcImg: string = useMemo(() => {
    return typeof src === "string"
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL + src
      : (getStrapiMedia(src as StrapiImage) as string);
  }, []);

  return <img src={srcImg} {...props} />
};

export default Image;
