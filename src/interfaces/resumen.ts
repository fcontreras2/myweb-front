import { StrapiImage } from "./strapi";

export enum RESUMEN_TYPE {
  SECTION = "resumen.resumen-section",
  CERTIFICATES = "resumen.resumen-section-certificates",
  GOALS = "resumen_goals",
  SKILLS = "resumen_skills",
}

export interface ResumenSection {
  title: string;
  resumen_section_list: {
    title: string;
    subtitle: string;
    dates: string;
    image: StrapiImage
    datail: string;
  }[];
}

export interface ResumenCertificates {
  title: string;
  resumen_section_certificates_list: {
    title: string;
    dates: string;
    platform: string;
  }[];
}

export interface Resumen<T> {
  dynamics_components: ({
    title: string;
    __component: RESUMEN_TYPE;
  } & Record<RESUMEN_TYPE, T>)[];
}
