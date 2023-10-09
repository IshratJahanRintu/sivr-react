
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";

import EditSivrPage from "./Components/SivrPageComponents/EditSivrPage";
import AudioUploadPage from "./Components/SivrPageComponents/AudioUploadPage";
import DeleteSivrPage from "./Components/SivrPageComponents/DeleteSivrPage";
import PageElementList from "./Components/PageElementComponents/PageElementList";
export default function App(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path="/editPage/:pageId" element={<EditSivrPage/>}/>
            <Route path="/audioUploadPage/:pageId" element={<AudioUploadPage/>}/>
            <Route path="/deletePage/:pageId" element={<DeleteSivrPage/>}/>
            <Route path="/sivrpage/pageElements" element={<PageElementList/>}/>
        </Routes>
        );

}