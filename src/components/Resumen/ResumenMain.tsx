import Image from "components/Image";
import { GlobalContext } from "pages/_app";
import { useContext } from "react";

const ResumenMain = () => {
  const { avatar } = useContext(GlobalContext);

  return (
    <>
    <div className="h-32" id="resumen-0" ></div>
      <div className="bg-resumen flex h-24 relative rounded-md" >
        <div className=" absolute  bg-white left-4 top-8   rounded-full w-[120px] h-[120px] overflow-hidden  border-2 my-10">
          <Image
            src={avatar.image}
            alt="Avatar fcontreras2"
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className=" flex flex-col pl-40 pt-4 justify-center">
        <h1 className="text-3xl font-semibold">Freddy Contreras</h1>
        <h2 className="text-lg text-gray-500">Frontend developer</h2>
        <p className="flex items-center">Lima, Perú</p>
      </div>
      <div className="flex flex-col space-y-8 pt-4">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};

export default ResumenMain;
