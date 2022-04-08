import { ModalContext } from "components/Modal/context/ModalContext";
import {
  ResumenCertificateItem,
  ResumenCertificates,
} from "interfaces/resumen";
import { useContext } from "react";
import ModalCertificate from "./Modals/ModalCertificate";

const ResumenCertificatesComponent = ({
  resumen_section_certificates_list,
}: ResumenCertificates) => {
  const { open } = useContext(ModalContext);

  const handleOpen = (item: ResumenCertificateItem) => {
    open({ ...ModalCertificate({ ...item }) });
  };
  return (
    <>
      {resumen_section_certificates_list.map((item, index) => (
        <div className="flex space-x-4" key={item.title + index}>
          <div className="flex  flex-col space-y-2 w-full">
            <div className="flex flex-col">
              <h6 className="font-semibold text-lg">{item.title}</h6>
              <p className="text-gray-500 text-sm">{item.platform}</p>
            </div>
            <p className="text-gray-500 text-xs">{item.dates}</p>

            <button
              className="text-primary-400 font-semibold text-xs cursor-pointer outline-none focus:underline w-20 text-left"
              onClick={() => handleOpen(item)}
            >
              Ver detalle
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumenCertificatesComponent;
