import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {SivrPageProvider} from "./Custom Hooks/SivrPageContext";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ModalProvider} from "./Custom Hooks/useModal";
ReactDOM.render(
    <React.StrictMode>
        <SivrPageProvider><ModalProvider>
     <BrowserRouter>  <App /></BrowserRouter></ModalProvider></SivrPageProvider>
    </React.StrictMode>,document.getElementById('root')
)

