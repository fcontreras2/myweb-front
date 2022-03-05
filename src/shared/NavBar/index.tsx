import Image from "next/image";
import Link from "next/link";
import NavBarLink from "./NavBarLink";

const LINKS: { url: string; title: string }[] = [
  { title: "Posts", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Resumen", url: "/resumen" },
];

const NavBar = () => {
  return (
    <div className="w-full fixed bg-white z-20 border-gray-100 border-b-2 ">
      <header className="container flex items-center mx-auto">
        <div className="flex items-center h-16 justify-between w-1/2">
          <Link href={"/"}>
            <a>
              <Image src="/logo.svg" width={110} height={50} alt="Logo fcontreras2" />
            </a>
          </Link>
        </div>
        <div className="flex justify-end  space-x-8 w-1/2">
          {LINKS.map((link) => (
            <NavBarLink key={link.url} {...link} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
