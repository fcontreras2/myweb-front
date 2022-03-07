import { NextSeo } from "next-seo";

const Meta = (props: any) => {
  return (
    <NextSeo
      title={props.metaTitle}
      description={props.metaDescription} 
    />
  );
};

export default Meta;