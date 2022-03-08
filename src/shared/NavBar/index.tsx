import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import MenuBars from "icons/menu-bars.svg";
import Close from "icons/close.svg";
import useResize, { Screen } from "hooks/useResize";
import { GlobalContext } from "pages/_app";
import Image from "components/Image";

const NavBar = React.memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const { navbar } = useContext(GlobalContext);
  const { isLarge } = useResize(Screen.lg);

  useEffect(() => {
    const body = document.querySelector("body");
    if (open && !isLarge) body?.classList.add("overflow-hidden");
    else body?.classList.remove("overflow-hidden");
  }, [open, isLarge]);

  return (
    <>
      <div className="w-full fixed bg-white z-20 border-gray-100 border-b-2 ">
        <header className="container relative flex items-center justify-between mx-auto">
          <div className="flex items-center h-16 justify-between w-1/2">
            <Link href={"/"}>
              <a>
                <div className="relative w-[100px] h-[64px]">
                  <Image
                    src={navbar.logo}
                    alt="Logo"
                    width={110}
                    height={64}
                    layout="responsive"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="hidden  lg:flex justify-end  space-x-8 w-1/2">
            {navbar.links.map((link) => (
              <NavBarLink key={link.url} {...link} />
            ))}
          </div>
          <button
            className="p-4 right-4 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Close height={"16px"} width={"16px"} />
            ) : (
              <MenuBars height={"16px"} width={"16px"} />
            )}
          </button>
        </header>
      </div>
      {open && (
        <div className="z-20 lg:hidden fixed mt-[66px] h-screen w-screen bg-white pt-4">
          <div className="container mx-auto flex flex-col space-y-4">
            {navbar.links.map((link) => (
              <NavBarLink key={link.url} {...link} />
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export default NavBar;
