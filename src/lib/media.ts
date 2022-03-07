import { getStrapiURL } from "./api";
import { StrapiImage } from "interfaces/strapi";

export function getStrapiMedia(media: StrapiImage):string {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}