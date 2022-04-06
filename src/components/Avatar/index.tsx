import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Image from "components/Image";
import Logos from "icons/logos.svg";
import MarkdownAvatar from "components/Markdown/MarkdownAvatar";

const Avatar = () => {
  const { avatar } = useContext(GlobalContext);

  return (
    <div className="wrapper-avatar flex flex-col shadow-sm h-[220px] space-y-6 items-center justify-center relative w-full pt-24 pb-8  mx-auto mb-32">
      <div className="container relative z-10">
        <div className="absolute top-10 left-0  border-2 rounded-full overflow-hidden">
          <Image
            src={avatar.image}
            alt="Avatar fcontreras2"
            width={140}
            height={140}
          />
        </div>

        <div className=" absolute top-24 left-40 flex flex-col justify-center">
              <h1 className="text-3xl font-semibold">Freddy Contreras</h1>
              <h2 className="text-lg text-gray-500">Frontend developer</h2>
              <p className="flex items-center">Lima, Perú</p>
             
            </div>
        <div className="absolute right-0 -bottom-16">
          <Logos />
        </div>

        
        {/* <div className="text-center absolute  top-20  p-6 rounded-md bg-white mx-auto 149bg-opacity-80">
          <div className="mx-auto  rounded-full w-[100px] h-[100px] overflow-hidden relative border-2 mb-6">
            <Image
              src={avatar.image}
              alt="Avatar fcontreras2"
              width={100}
              height={100}
            />
          </div>
          <div className=" p-2 bg-opacity-80 rounded-sm">
          <MarkdownAvatar>
            {avatar.title}
          </MarkdownAvatar>

          <h2 className="font-medium text-lg text-gray-700 ">{avatar.subtitle}</h2>
          <div className="flex justify-center mt-4">
            <Logos></Logos>
          </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Avatar;
