import Image from "components/Image";
import MarkdownContent from "components/Markdown/MarkdownContent";
import { ModalContext } from "components/Modal/context/ModalContext";
import { ResumenSection, ResumenSectionItem } from "interfaces/resumen";
import { useContext } from "react";
import remarkGfm from "remark-gfm";
import ModalSection from "./Modals/ModalSection";

const ResumenSectionComponent = ({ resumen_section_list }: ResumenSection) => {
    const { open } = useContext(ModalContext);

    const handleOpen = (item: ResumenSectionItem) => {
      console.log(item);
      open({ ...ModalSection({...item}) });
    };

  return (
    <>
      {resumen_section_list.map((item, index) => (
        <div className="flex space-x-4" key={item.title + index}>
          {item.image && (
            <>
              <div className="relative w-[60px] h-[60px] border-2 flex items-center justify-center bg-white z-10">
                <Image
                  src={item.image}
                  alt="Avatar fcontreras2"
                  width={60}
                  height={60}
                />
              </div>
            </>
          )}
          <div className="flex  flex-col space-y-2 w-full">
            <div className="flex flex-col">
              <h6 className="font-semibold text-lg">{item.title}</h6>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>
            <p className="text-gray-500 text-xs">{item.dates}</p>
            <p className="line-clamp-2 text-sm">
              <MarkdownContent remarkPlugins={[remarkGfm]}>
                {item.detail}
              </MarkdownContent>
            </p>
            <button
              className="text-primary-400 font-semibold text-xs cursor-pointer outline-none focus:underline w-20 text-left"
              onClick={() =>handleOpen(item)}
            >
              Ver detalle
            </button>
          </div>
          <div className="absolute h-full -top-0 w-0.5  z-0  bg-gray-200 left-[10px]"></div>
        </div>
      ))}
    </>
  );
};

export default ResumenSectionComponent;
