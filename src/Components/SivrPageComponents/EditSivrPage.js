import React, {useState} from "react";
import axios from "axios";
import {useModal} from "../../Custom Hooks/useModal";

export default function EditSivrPage() {
    const {modalProperties,showModal}=useModal();
    const {activePage}=modalProperties;
    console.log(activePage);


    const [formData, setFormData] = useState({
        vivr_id: activePage.vivr_id || "",
        service_title_id: activePage.service_title_id || "123",
        report_title_id:activePage.report_title_id||"123",
        task: activePage.task || "navigation",
        page_heading_en: activePage.page_heading_en || "",
        page_heading_ban: activePage.page_heading_ban || "",
        has_main_menu: activePage.has_main_menu || "Y",
        has_previous_menu: activePage.has_previous_menu || "Y",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/update-sivr-page/' + activePage.id,
                formData
            );

            if (response.status === 200) {

                console.log('Update successful');
                showModal('', {});


            } else {

                console.error('Update failed');
            }
        } catch (error) {

            console.error('Error:', error);
        }
    };
    const handleCloseModal = () => {
        showModal('none');
    };

    return (
        <div>
            <div className='modal fade show' tabIndex="-1" id="g-sivr-add-modal" style={{display:'block'}} >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <form onSubmit={handleFormSubmit} method="POST">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Page</h5>
                                    <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                <div className="form-group  mb-3">
                                    <label htmlFor="edit_service_title_id">Service Title
                                        ID</label>
                                    <select className="form-control  "
                                            name="service_title_id"
                                            id="edit_service_title_id" value={formData.service_title_id} onChange={handleInputChange}>
                                        <option value="123">123
                                        </option>
                                        <option value="456">456
                                        </option>
                                        <option value="789">789
                                        </option>
                                    </select>
                                </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="g-report-a-title">Report Title</label>
                                        <select className="form-control" name="g-service-title" id="g-report-a-title" value={formData.report_title_id} onChange={handleInputChange}>
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


                                <div className="form-group  mb-3">
                                    <label htmlFor="edit_task">Task</label>
                                    <select className="form-control  "
                                            name="task" id="edit_task" value={formData.task} onChange={handleInputChange}>
                                        <option value="navigation">Navigation
                                        </option>
                                        <option value="compare"
                                        >Compare
                                        </option>

                                        <option value="language_change">Language
                                            Change
                                        </option>

                                        <option value="call_agent">Call
                                            Agent
                                        </option>
                                        <option value="input_error">Input
                                            Error
                                        </option>
                                    </select>
                                </div>

                                <div className="form-group  mb-3">
                                    <label htmlFor="edit_page_heading_en">Page Heading
                                        (EN)</label>
                                    <input type="text"
                                           className="form-control"
                                           name="page_heading_en"
                                           id="edit_page_heading_en"
                                           placeholder="Page Heading (EN)"
                                           value={formData.page_heading_en} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group  mb-3">
                                    <label htmlFor="edit_page_heading_ban">Page Heading
                                        (BN)</label>
                                    <input type="text"
                                           className="form-control  "
                                           name="page_heading_ban"
                                           id="edit_page_heading_ban"
                                           placeholder="Page Heading (BN)"
                                           value={formData.page_heading_ban} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group  mb-3">
                                    <label htmlFor="edit_has_main_menu">Navigate To Main
                                        Page</label>
                                    <select className="form-control  "
                                            name="has_main_menu"
                                            id="edit_has_main_menu" value={formData.has_main_menu} onChange={handleInputChange}>
                                        <option value="Y" >YES
                                        </option>
                                        <option value="N">NO
                                        </option>
                                    </select>
                                </div>

                                <div className="form-group  mb-3">
                                    <label htmlFor="edit_has_previous_menu">Navigate To
                                        Previous Page</label>
                                    <select className="form-control  "
                                            name="has_previous_menu"
                                            id="edit_has_previous_menu" value={formData.has_previous_menu} onChange={handleInputChange}>
                                        <option value="Y" >YES
                                        </option>
                                        <option value="N" >NO
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



