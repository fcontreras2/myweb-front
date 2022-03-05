import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  url: string;
  title: string;
};

const NavBarLink = ({ url, title }: Props) => {
  const { asPath, isReady } = useRouter();
  const [ className, setClassName] = useState<string>(""); 

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(url, location.href)
        .pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `text-primary`
          : 'text-gray-800'

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
  ]);


  return (
    <Link href={url}>
      <a className={`font-normal ${className} hover:text-primary`}>{title}</a>
    </Link>
  );
};

export default NavBarLink;
