import React, {createContext, useContext, useState} from "react";

const ModalContext=createContext();
export  function ModalProvider({children}){


    const [modalProperties,setModalProperties]=useState({
        type:'none',
        activePage: {},
        activeElement:{}
    });

    const showModal=(type,activePage=modalProperties.activePage,activeElement=modalProperties.activeElement)=>{
        setModalProperties({
            type,
            activePage,
            activeElement
        });
    }


    return (
        <ModalContext.Provider value={{modalProperties,showModal}}>{children}
        </ModalContext.Provider>
    )



}

export function useModal(){
    return useContext(ModalContext);
}