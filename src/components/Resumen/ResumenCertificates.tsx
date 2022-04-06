import { ResumenCertificates } from "interfaces/resumen";

const ResumenCertificatesComponent = ({ resumen_section_certificates_list }: ResumenCertificates) => {
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
            
            <a className="text-primary-400 font-semibold text-xs">
              Ver detalle
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumenCertificatesComponent;
