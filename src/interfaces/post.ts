import { Meta } from "./seo";
import { StrapiImage, StrapiPopulate } from "./strapi";

export interface Tag {
  title: string;
}

export interface Post {
  slug: string;
  title: string;
  content: string;
  image: StrapiImage;
  tags: StrapiPopulate<Tag>,
  seo: Meta
}