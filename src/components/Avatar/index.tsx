import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Image from "components/Image";
import Logos from "icons/logos.svg";

const Avatar = () => {
  const { avatar } = useContext(GlobalContext);

  return (
    <div className="wrapper-avatar flex flex-col shadow-sm h-[160px] lg:h-[220px] space-y-6 items-center justify-center relative w-full pt-24 pb-8  mx-auto mb-32">
      <div className="container relative z-10">
        <div className="absolute w-[120px]  h-[120px] lg:w-auto lg:h-auto -top-10 lg:top-10 lg:left-0  border-2 rounded-full overflow-hidden">
          <Image
            src={avatar.image}
            alt="Avatar fcontreras2"
            width={140}
            height={140}
          />
        </div>

        <div className=" absolute top-24 lg:left-40 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Freddy Contreras</h1>
          <h2 className="text-lg text-gray-500">Frontend developer</h2>
          <p className="flex items-center">Lima, Perú</p>
        </div>
        <div className="absolute right-0 lg:-bottom-16">
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
