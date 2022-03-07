import Image from "next/image";
import Link from "next/link";
import Layout from "shared/Layout";

const Custom404 = () => (
  <Layout>
    <div className="h-[70vh] col-span-16 flex flex-col items-center justify-center bg-">
      <div className=" flex flex-col items-center w-[20vw] h-[20vw] justify-center  border-2 p-12">
        <Image src="/404.svg" width={200} height={100} alt="Página 404"></Image>
        <p className="text-xl text-center w-full">Página no encontrada!</p>
        <Link href={"/"}>
          <a className="text-primary-400 text-lg font-semibold mt-4">
            Ir a inicio
          </a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Custom404;
