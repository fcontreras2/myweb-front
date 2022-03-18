import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Image from "components/Image";
import Logos from "icons/logos.svg";
import MarkdownAvatar from "components/Markdown/MarkdownAvatar";

const Avatar = () => {
  const { avatar }  = useContext(GlobalContext);

  return (
    <div className="flex flex-col shadow-sm bg-gray-50  space-y-6 items-center bg-auto bg-no-repeat bg-bottom  justify-center relative w-full pt-24 pb-8  mx-auto">
      <div className="container z-10">
        <div className="text-center p-6  lg:w-1/2 mx-auto">
          <div className="mx-auto  rounded-full w-[100px] h-[100px] overflow-hidden relative border-2 mb-6">
            <Image
              src={avatar.image}
              alt="Avatar fcontreras2"
              width={100}
              height={100}
            />
          </div>
          <MarkdownAvatar>
            {avatar.title}
          </MarkdownAvatar>
          <h2 className="font-light text-sm ">{avatar.subtitle}</h2>
          <div className="flex justify-center mt-8">
            <Logos></Logos>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
