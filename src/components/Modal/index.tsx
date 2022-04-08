import {
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ModalContext } from "./context/ModalContext";
import { ModalState } from "./context/ModalProvider";

const MODAL_SIZE: Record<string, string> = {
  sm: "w-[90%] lg:w-1/4",
  md: "w-[90%] lg:w-1/3",
  lg: "w-[90%] lg:w-1/2",
};

const Modal = ({ open, header, content, footer, size }: ModalState) => {
  const { close } = useContext(ModalContext);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const { target } = event;
    if ((target as Element).classList.contains("modal__background")) {
      close();
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("class", "overflow-hidden");

    window.addEventListener("keydown", (event: any) => {
      const { key } = event;
      if (String(key) === "Escape") {
        close();
      }
    });

    return () => {
      body?.setAttribute("class", "overflow-auto");
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`modal__background  ${
        open ? "--open" : "--close"
      }  fixed top-0 left-0 flex items-center justify-center z-50 h-screen w-full`}
    >
      <div className={`modal w-full flex justify-center`}>
        <div
          className={`modal__container m-0 relative rounded-lg ${
            MODAL_SIZE[size as string]
          }`}
        >
          <div className=" px-8 lg:px-12 py-12 pb-1 bg-blue-dark-400 block rounded-t-lg bg-white w-full ">
            {header}
            <button className="close top-4 right-8" onClick={() => close()} />
          </div>
          <div className={`bg-white px-8 lg:px-12  py-12 pt-2 max-h-[50vh] overflow-auto ${!footer && 'rounded-b-lg'}`}>
            {content}
          </div>
          {footer && (
            <div className=" flex justify-end bg-white border-t-2 border-t-gray-50  rounded-b-lg px-8 lg:px-12 py-8">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
