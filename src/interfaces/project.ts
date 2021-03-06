import { Meta } from "./seo";
import { StrapiImage, StrapiPopulate } from "./strapi";
import { Tag } from "./tag";

export interface Project {
  slug: string;
  title: string;
  content: string;
  image: StrapiImage;
  icon: StrapiImage;
  link_demo: string;
  tags: StrapiPopulate<Tag>,
  seo: Meta
}