import { useContext } from "react";
import Image from "components/Image";
import MarkdownContent from "components/Markdown/MarkdownContent";
import { ModalContext } from "components/Modal/context/ModalContext";
import { ModalState } from "components/Modal/context/ModalProvider";
import { ResumenCertificateItem } from "interfaces/resumen";
import remarkGfm from "remark-gfm";

const ModalCertificateContent = (props: ResumenCertificateItem) => (
  <>
    <p className="font-semibold text-xl text-gray-700">{props.title}</p>
    <p className="text-sm text-gray-500">{props.dates}</p>
  </>
);

const ModalCertificateFooter = () => {
  const { close } = useContext(ModalContext);
  return (
    <button
      onClick={close}
      className="text-sm border-2 hover:text-primary-500 p-2 border-gray-200 hover:border-primary-400 rounded-md "
    >
      Cerrar
    </button>
  );
};

const ModalCertificate = (
  props: ResumenCertificateItem
): Omit<ModalState, "open"> => {
  return {
    header: (
      <h4 className="text-xl lg:text-2xl font-semibold border-b-2  mb-6 w-5/6 border-b-primary-300 uppercase ">
        {props?.title}
      </h4>
    ),
    content: <ModalCertificateContent {...props} />,
    footer: <ModalCertificateFooter />,
    size: "sm",
  };
};

export default ModalCertificate;
