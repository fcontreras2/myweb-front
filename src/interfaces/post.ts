import { Meta } from "./seo";
import { StrapiImage, StrapiPopulate } from "./strapi";
import { Tag } from "./tag";


export interface Post {
  slug: string;
  title: string;
  content: string;
  image: StrapiImage;
  tags: StrapiPopulate<Tag>,
  posts:  StrapiPopulate<Post>,
  seo: Meta
}