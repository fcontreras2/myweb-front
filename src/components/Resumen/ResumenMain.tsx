import { useContext } from "react";
import Image from "components/Image";
import { ResumenMain } from "interfaces/resumen";
import { GlobalContext } from "pages/_app";
import MarkdownContent from "components/Markdown/MarkdownContent";
import remarkGfm from "remark-gfm";

const ResumenMain = ({ name, role, description, location }: ResumenMain) => {
  const { avatar } = useContext(GlobalContext);

  return (
    <>
      <div className="h-32" id="resumen-0"></div>
      <div className="bg-resumen flex h-24 relative rounded-md">
        <div className=" absolute  bg-white left-4 -top-8 lg:top-8 w-[80px] h-[80px]   rounded-full lg:w-[120px] lg:h-[120px] overflow-hidden  border-2 my-10">
          <Image
            src={avatar.image}
            alt="Avatar fcontreras2"
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className=" flex flex-col lg:pl-40 pt-4 justify-center">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <h2 className="text-lg text-gray-500">{role}</h2>
        <p className="flex items-center">{location}</p>
      </div>
      <div className="flex flex-col space-y-8 pt-8">
        <p>
          <MarkdownContent remarkPlugins={[remarkGfm]}>
            {description}
          </MarkdownContent>
        </p>
      </div>
    </>
  );
};

export default ResumenMain;
