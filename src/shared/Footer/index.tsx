import LinkedIn from "icons/linkedin.svg";
import Github from "icons/github.svg";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Link from "next/link";

const Footer = () => {
  const { link_github, link_linkedin } = useContext(GlobalContext);
  return (
    <div className="bg-gray-700 z-10">
      <div className="container flex   text-white py-10 mx-auto ">
        <div className="w-1/2">
          <h5 className="text-xl border-b-2 w-32 border-b-white mb-4">
            Contanto
          </h5>
          <p className="font-light text-sm">
            <strong>Email:</strong> freddycontreras3@gmail.com
          </p>
          <p className="font-light text-sm">
            <strong>Phone:</strong> +51-533562548
          </p>
        </div>
        <div className="flex  justify-end items-center space-x-4 w-1/2">
          <Link href={link_github}>
            <a target="_blank" rel="noopener noreferrer">
              <Github width={"32px"} height={"32px"} fill="#ffffff" />
            </a>
          </Link>
          <Link href={link_linkedin}>
            <a target="_blank" rel="noopener noreferrer">
              <LinkedIn width={"32px"} height={"32px"} fill="#ffffff" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
