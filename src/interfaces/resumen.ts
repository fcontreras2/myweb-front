import { StrapiImage, StrapiPopulate } from "./strapi";
import { Tag } from "./tag";

export enum RESUMEN_TYPE {
  SECTION = "resumen.resumen-section",
  CERTIFICATES = "resumen.resumen-section-certificates",
  GOALS = "resumen_goals",
  SKILLS = "resumen.resumen-skills",
}

export interface ResumenSectionItem {
  title: string;
  subtitle: string;
  dates: string;
  image: StrapiImage
  detail: string;
}

export interface ResumenSection {
  title: string;
  resumen_section_list: ResumenSectionItem[];
}

export interface ResumenCertificateItem {
  title: string;
  dates: string;
  platform: string;
}

export interface ResumenCertificates {
  title: string;
  resumen_section_certificates_list: ResumenCertificateItem[];
}

export interface ResumenMain {
  name: string;
  role: string;
  location: string;
  description: string;
}

export interface ResumenSkillItem {
  title: string;
  tags: StrapiPopulate<Tag>
}

export interface ResumenSkill {
  title: string;
  resumen_skills_list: ResumenSkillItem[]
}

export interface Resumen<T> {
  resumen_main: ResumenMain;
  dynamics_components: ({
    title: string;
    __component: RESUMEN_TYPE;
  } & Record<RESUMEN_TYPE, T>)[];
}
