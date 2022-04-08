import { useContext } from "react";
import Image from "components/Image";
import MarkdownContent from "components/Markdown/MarkdownContent";
import { ModalContext } from "components/Modal/context/ModalContext";
import { ModalState } from "components/Modal/context/ModalProvider";
import { ResumenSectionItem } from "interfaces/resumen";
import remarkGfm from "remark-gfm";

const ModalSectionContent = (props: ResumenSectionItem) => (
  <>
    <div className="flex space-x-4">
      {props.image && (
        <div className="relative w-[50px] h-[50px] border-2 flex items-center justify-center bg-white z-10">
          <Image
            src={props.image}
            alt="Avatar fcontreras2"
            width={60}
            height={60}
          />
        </div>
      )}
      <div className="flex flex-col">
        <p className="font-semibold text-xl text-gray-700">{props.subtitle}</p>
        <p className="text-sm text-gray-500">{props.dates}</p>
      </div>
    </div>
    <div className="flex relative text-sm mt-8 pb-10">
      <MarkdownContent remarkPlugins={[remarkGfm]}>
        {props.detail}
      </MarkdownContent>
    </div>
  </>
);

const ModalSection = (props: ResumenSectionItem): Omit<ModalState, "open"> => {
  return {
    header: (
      <h4 className="text-xl lg:text-2xl font-semibold border-b-2  mb-6 w-1/3 border-b-primary-300 uppercase ">
        {props?.title}
      </h4>
    ),
    content: <ModalSectionContent {...props} />,
    size: "lg",
  };
};

export default ModalSection;
