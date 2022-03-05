import type { NextPage } from "next";
import Link from "next/link";
import Layout from "shared/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout avatar className="pt-16">
        <div className="col-start-1 col-end-11">
          <div className="flex justify-between items-end">
            <h4 className="text-3xl font-semibold border-b-2 w-32 border-b-primary-300">
              POSTS
            </h4>
            <p className="text-gray-600">20 resultados</p>
          </div>
          {Array(10)
            .fill(10)
            .map((e, i) => (
              <div className="w-full flex flex-col space-y-2 my-10 border-2 px-8 py-10 cursor-pointer hover:shadow-md" key={"card-" + i}>
                <h3 className="font-semibold text-xl  ">Javascript Ejemplo</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-normal text-xs text-gray-10">20 Jun, 2021 </span>
                  <span className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs">React</span>
                  <span className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs">React</span>
                  <span className="p-0.5 px-2 rounded-full border-2 text-gray-500 text-xs">React</span>
                </div>
                <p className="line-clamp-3 text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link href={"/asd"}>
                  <a className="text-primary-400 text-sm font-semibold">Continuar...</a>
                </Link>
              </div>
            ))}
        </div>
        <div className="col-start-13 col-span-4 relative">
          <div className="sticky ">

          <h3 className="text-lg font-semibold border-b-2 w-32 border-b-primary-300">
            PROJECTS
          </h3>
          {Array(3)
            .fill(10)
            .map((e,i) => (
              <div className="w-full flex flex-col space-y-2 my-4 border-2 p-6" key={"card2-" + i}>
                <h3 className="font-semibold text-md">Javascript Ejemplo</h3>
                <span className="text-normal text-xs text-gray-500">10-12-2021 </span>
                <p className="line-clamp-3 text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link href={"/asd"}>
                  <a className="text-primary-500 text-xs">Continuar...</a>
                </Link>
              </div>
            ))}
            </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
