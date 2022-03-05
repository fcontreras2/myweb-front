import Image from "next/image";

const Avatar = () => (
  <div
    style={{ backgroundImage: `url(/background.png)` }}
    className="flex flex-col space-y-6 items-center bg-auto bg-no-repeat bg-bottom  justify-center relative w-full pt-24 pb-20  mx-auto"
  >

    <div className="container z-10">
      <div className="text-center p-6  lg:w-1/2 mx-auto">
        <div className="mx-auto rounded-full w-[100px] h-[100px] overflow-hidden relative border-2 mb-6">
          <Image
            src="/avatar.png"
            alt="Avatar fcontreras2"
            width={100}
            height={100}
          />
        </div>
        <h1 className="font-poppins font-semibold text-gray-700 uppercase">
          Hola, soy <span className="text-primary-500">Freddy Contreras</span>
        </h1>
        <h2 className="font-light text-sm bg-white">
          Desarrollo Frontend de aplicaciones Web
        </h2>
      </div>
    </div>
  </div>
);

export default Avatar;
