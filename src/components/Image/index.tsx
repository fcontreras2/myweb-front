import NextImage, { ImageProps } from "next/image";
import { getStrapiMedia } from "lib/media";
import { StrapiImage } from "interfaces/strapi";
import LazyLoad from "react-lazyload";
import { useMemo } from "react";

const Image = ({
  src,
  alt,
  ...props
}: Omit<ImageProps, "src"> & { src: StrapiImage | string }) => {

  const srcImg:string = useMemo(() => {
    return typeof src === "string"
    ? (process.env.NEXT_PUBLIC_STRAPI_API_URL) + src
    : (getStrapiMedia(src as StrapiImage) as string);
  }, [])

  return (

    srcImg.includes('.svg') ? 
    <LazyLoad>
      <img
        src={srcImg}
        alt={alt || ""}
        {...props}
      />
    </LazyLoad>: 
    <NextImage src={srcImg} {...props}/>
    
  );
};

export default Image;
