import React from "react";
import {useModal} from "../../Custom Hooks/useModal";
import DeleteElementModal from "./DeleteElementModal";
import AddPageElementModal from "./AddPageElementModal";



export default function PageElementModal(){

    const {modalProperties,showModal}=useModal();
    console.log(modalProperties.type)
    return (
       <>{modalProperties.type ==='deleteElement' && <DeleteElementModal  />}
           {modalProperties.type==='addElement' && <AddPageElementModal />}
       </>
    )
}