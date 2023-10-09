import React, {useState} from 'react';
import '../../styles/custom.css';
import axios from "axios";
import {useSivrPages} from "../../Custom Hooks/SivrPageContext";
import {useModal} from "../../Custom Hooks/useModal";

function AddSivrPage() {
    const {modalProperties,showModal}=useModal();
    const {activePage} = modalProperties;
    const {rootPage,addChild,setRootPage} = useSivrPages();
    console.log(rootPage);
    const handleCloseModal = () => {
        showModal('none');
    };
    console.log(activePage);
    const [formData, setFormData] = useState({
        parent_page_id: activePage.id,
        vivr_id: activePage.vivr_id,
        service_title_id: "123",
        task: "navigation",
        page_heading_en: "",
        page_heading_ban: "",
        has_main_menu: "Y",
        has_previous_menu: "Y",
    });


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/add-sivr-page',
                formData
            );

            if (response.status === 200) {
                const sivrPage = response.data.sivrPage;
                console.log(sivrPage);


                const parentId=sivrPage.parent_page_id;
                sivrPage.children = [];

             const updatedRoot= addChild(rootPage,parentId,sivrPage);
               setRootPage(updatedRoot);
                console.log('SivrPage added');
                console.log(modalProperties);
                showModal('none');

            } else {

                console.error('add failed');

            }
        } catch (error) {

            console.error('Error:', error);

        }
    };

    return (
        <div>


            <div className='modal fade show' tabIndex="-1" id="g-sivr-add-modal" style={{display: 'block'}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <form onSubmit={handleFormSubmit} method="POST">
                            <div className="modal-header">
                                <h5 className="modal-title">SIVR Page ADD</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group mb-3">
                                    <label htmlFor="g-service-a-title">Service Title</label>
                                    <select className="form-control" name="g-service-title" id="g-service-a-title">
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="g-report-a-title">Report Title</label>
                                    <select className="form-control" name="g-service-title" id="g-report-a-title">
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                        <option value="">12212</option>
                                    </select>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Task</label>
                                    <select className="form-control" name="task" id="task" onChange={handleInputChange}>
                                        <option
                                            value="navigation">
                                            Navigation
                                        </option>
                                        <option
                                            value="compare">
                                            Compare
                                        </option>

                                        <option
                                            value="language_change">
                                            Language Change
                                        </option>

                                        <option
                                            value="call_agent">
                                            Call Agent
                                        </option>
                                        <option
                                            value="input_error">
                                            Input Error
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Page Heading (EN)</label>
                                    <input type="text" className="form-control"
                                           name="page_heading_en" id="page_heading_en"
                                           placeholder="Page Heading (EN)" onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group  mb-3">
                                    <label>Page Heading (BN)</label>
                                    <input type="text" className="form-control"
                                           name="page_heading_ban" id="page_heading_ban"
                                           placeholder="Page Heading (BN)" onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group  mb-3">
                                    <label>Navigate To Main Page</label>
                                    <select className="form-control" name="has_main_menu"
                                            id="has_main_menu" onChange={handleInputChange}>
                                        <option
                                            value="Y">
                                            YES
                                        </option>
                                        <option
                                            value="N">
                                            NO
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group  mb-3">
                                    <label>Navigate To Previous
                                        Page</label>
                                    <select className="form-control" name="has_previous_menu"
                                            id="has_previous_menu" onChange={handleInputChange}>
                                        <option
                                            value="Y">
                                            YES
                                        </option>
                                        <option
                                            value="N">
                                            NO
                                        </option>
                                    </select>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                                <button type="submit" className="btn btn-sm btn-primary text-white">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </div>
    );
}

export default AddSivrPage;
