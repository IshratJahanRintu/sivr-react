import React from "react";
import PageElement from "./PageElement";
import {useModal} from "../../Custom Hooks/useModal";


export default function PageElementList() {
    const {modalProperties,showModal}=useModal();
    const {activePage} = modalProperties;
    console.log(activePage);

    const handleCloseModal = () => {
        showModal('none');
    };
    return (<div>

            <div className='modal fade show' tabIndex="-1" id="g-sivr-add-modal" style={{display: 'block'}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Page Elements</h5>

                            <button onClick={()=>showModal('addElement',activePage)} className="btn btn-outline-primary btn-sm ms-4"
                            ><i className="bi bi-plus"></i> Add
                                New Page Element
                            </button>

                            <button type="button" className="btn-close" onClick={handleCloseModal}
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {activePage.page_elements ? activePage.page_elements.map(pageElement => <PageElement
                                pageElement={pageElement}/>) : <h6>No Page Element to show</h6>}

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </div>


    );
}