import Image from "next/image";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import MenuBars from "icons/menu-bars.svg";
import { useState } from "react";

const LINKS: { url: string; title: string }[] = [
  { title: "Posts", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Resumen", url: "/resumen" },
];

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full fixed bg-white z-20 border-gray-100 border-b-2 ">
        <header className="container relative flex items-center justify-between mx-auto">
          <div className="flex items-center h-16 justify-between w-1/2">
            <Link href={"/"}>
              <a>
                <Image
                  src="/logo.svg"
                  width={110}
                  height={"64px"}
                  alt="Logo fcontreras2"
                />
              </a>
            </Link>
          </div>
          <div className="hidden  lg:flex justify-end  space-x-8 w-1/2">
            {LINKS.map((link) => (
              <NavBarLink key={link.url} {...link} />
            ))}
          </div>
          <button className="p-4 right-4 lg:hidden" onClick={() => setOpen(!open)}>
            <MenuBars height={"16px"} width={"16px"} />
          </button>
        </header>
      </div>
      {
        open &&
        <div className="z-20 lg:hidden absolute mt-[66px] h-screen w-screen bg-white pt-4">
          <div className="container mx-auto flex flex-col space-y-4">
            {LINKS.map((link) => (
              <NavBarLink key={link.url} {...link} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default NavBar;
