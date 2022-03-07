import { StrapiImage } from "./strapi";


export interface MetaSocial {
  id: number;
  description: string;
  socialNetwork: string;
  title: string;
}

export interface Meta {
  canonicalURL: string;
  id: number;
  keywords: string;
  metaDescription: string;
  metaImage: StrapiImage;
  metaRobots: string;
  metaSocial: MetaSocial;
  metaTitle: string;
  metaViewport: string;
  structuredData: string;
}