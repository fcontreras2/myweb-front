import { Meta } from "./seo";
import { StrapiImage } from "./strapi";

export type Link = {
  name: string;
  url: string;
}

export interface Avatar {
  image: StrapiImage;
  title: string;
  subtitle: string;
}

export interface GlobalApp extends Avatar {
  navbar: {
    logo: StrapiImage;
    links: Link[]
  },
  avatar: Avatar,
  link_github: string;
  link_linkedin: string;
  seo: Meta
} 