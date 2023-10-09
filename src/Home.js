import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.min.css';
import './styles/vendors.min.css'
import './styles/custom.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
import Tree from "./Components/HomeComponents/Tree";
import {useSivrPages} from "./Custom Hooks/SivrPageContext";
import {useContextMenu} from "./Custom Hooks/useContextMenu";
import SivrPageModal from "./Components/SivrPageComponents/SivrPageModal";
import PageElement from "./Components/PageElementComponents/PageElement";
import PageElementModal from "./Components/PageElementComponents/PageElementModal";

export default function Home() {
    const { rootPage } = useSivrPages();

const { contextMenuProperties, showContextMenu, hideContextMenu }=useContextMenu();


    console.log(rootPage);
    return (
        <div className="container-fluid mb-3">

            <div className="g-sivr-tree-area">
                <div className="g-sivr-tree-main">
                    <div className="card">
                        <div className="card-body">
                            <div className="g-tree-view-area">
                                <h3 className="heading">SIVR Tree Menu</h3>
                                <div className="file-browser">
                                    <Tree data={rootPage}  contextMenuProperties={contextMenuProperties}
                                          showContextMenu={showContextMenu} hideContextMenu={hideContextMenu}  />


                                    <SivrPageModal />
                                    <PageElementModal/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}