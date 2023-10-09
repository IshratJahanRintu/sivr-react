import React from "react";
import {useModal} from "../../Custom Hooks/useModal";
import AddSivrPage from "./SivrAddPage";
import EditSivrPage from "./EditSivrPage";
import DeleteSivrPage from "./DeleteSivrPage";
import AudioUploadPage from "./AudioUploadPage";
import PageElementList from "../PageElementComponents/PageElementList";
export default function SivrPageModal(){
    const {modalProperties,showModal}=useModal();
return(
    <>{modalProperties.type==='add' && <AddSivrPage />}
        {modalProperties.type==='edit' && <EditSivrPage />}
        {modalProperties.type==='pageElement' && <PageElementList />}
        {modalProperties.type==='delete' && <DeleteSivrPage />}
        {modalProperties.type==='audio' && <AudioUploadPage />}

        </>
);



}