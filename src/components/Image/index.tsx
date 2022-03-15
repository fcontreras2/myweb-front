import NextImage, { ImageProps } from "next/image";
import { getStrapiMedia } from "lib/media";
import { StrapiImage } from "interfaces/strapi";
import { useMemo } from "react";
import "external-svg-loader";

const Image = ({
  src,
  alt,
  width,
  height,
  ...props
}: Omit<ImageProps, "src"> & { src: StrapiImage | string  }) => {
  const srcImg: string = useMemo(() => {
    return typeof src === "string"
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL + src
      : (getStrapiMedia(src as StrapiImage) as string);
  }, []);

  return srcImg.includes(".svg") ? (
    <svg
      data-src={srcImg}
      fill="currentColor"
      width={width} 
      height={height}
    />
  ) : (
    <NextImage src={srcImg} width={width} height={height} {...props} />
  );
};

export default Image;
