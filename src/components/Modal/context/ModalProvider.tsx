import { useEffect, useReducer, useState } from "react"
import Modal from ".."
import { ModalContext } from "./ModalContext"
import { ModalReducer } from "./ModalReducer"

export type ModalState = {
    open?: boolean;
    header?: JSX.Element | JSX.Element[] |  string;
    content: JSX.Element | JSX.Element[],
    size?: "sm" | "md" | "lg",
    footer?: JSX.Element | JSX.Element
}

const INITIAL_STATE: ModalState = {
    open: false,
    content: <></>,
    size: "md"
}

type Props  = {
    children: JSX.Element | JSX.Element[];
}


export const ModalProvider = ({ children }: Props ) => {

    const [{ open:isOpen, header, content, footer, size }, dispatch] = useReducer(ModalReducer, INITIAL_STATE)
    
    const [eventOpen, setEventOpen] = useState<boolean>(false);

    const open = (state:Omit<ModalState, "open"> = INITIAL_STATE):void => {
        dispatch({type: 'open', payload: state})
    }

    const close = () => {
        dispatch({type: 'close'})
    }

    useEffect(() => {

        setTimeout(() => {
          setEventOpen((isOpen as boolean));
        }, isOpen ? 0: 300 );        
    }, [isOpen])

    return (
      <ModalContext.Provider
        value={{
          open,
          close,
        }}
      >
        {eventOpen && (
          <Modal 
            open={isOpen}
            header={header}
            content={content}
            footer={footer}
            size={size}
          />
        )}
        {children}
      </ModalContext.Provider>
    );
} 
