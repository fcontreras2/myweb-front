import getDay from "lib/days";
import Image from "components/Image";
import { Avatar } from "interfaces/global";
import LinkedIn from "icons/linkedin.svg";
import Github from "icons/github.svg";

type Props = {
  avatar: Avatar;
  createdAt:string;
}

const ContentAuthor = ({ avatar, createdAt }:Props) => {
  return (
    <>
      <div className="rounded-full w-[100px] h-[100px] overflow-hidden relative border-2 mb-6">
        <Image
          src={avatar.image}
          alt="Avatar fcontreras2"
          width={100}
          height={100}
        />
      </div>
      <h3 className="font-medium border-b-2 w-[70%] border-b-primary-300">
        <strong className="font-semibold">Freddy Contreras</strong>
      </h3>
      <p className="font-medium m-0 text-sm">
        {getDay(createdAt)}
      </p>
      <div className="flex space-x-2">
        <LinkedIn fill="#c1c1c1" width={"20px"} height={"20px"} />
        <Github fill="#c1c1c1" width={"20px"} height={"20px"} />
      </div>
    </>
  );
};

export default ContentAuthor;
