import React, {useState} from 'react';
import '../../styles/custom.css';
import axios from "axios";
import {useSivrPages} from "../../Custom Hooks/SivrPageContext";
import {useModal} from "../../Custom Hooks/useModal";
import Button from "../PageElementProperties/Button/Button";
import Paragraph from "../PageElementProperties/Paragraph/Paragraph";
function AddPageElementModal() {
    const {modalProperties, showModal} = useModal();
    const {activePage} = modalProperties;
    const handleCloseModal = () => {
        showModal('none');
    };
    console.log(activePage);
    // const [formData, setFormData] = useState({
    //     page_id :activePage.id ,
    //     type : 'button',
    //     background_color : '#ffffff',
    //     text_color : '#000000',
    //     element_order :'' ,
    //     is_visible :'N',
    //     data_provider_function : '',
    // });
    //
    // const resetFormData=()=>{
    //     setFormData({
    //         page_id :activePage.id ,
    //         type : formData.type,
    //         background_color : formData.background_color,
    //         text_color : formData.text_color,
    //         element_order :formData.element_order,
    //         is_visible :formData.is_visible,
    //         data_provider_function : formData.data_provider_function,
    //     })
    // }
    //
    // const handleInputChange = (e) => {
    //     const {name, value} = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');

        const formData = {};
        const formElements = e.target.elements;
        formData.page_id = activePage.id;
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];

            if (element.name) {
                formData[element.name] = element.value;
            }
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/add-page-element',
                formData
            );

            if (response.status === 200) {
                console.log('SivrPage added');
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
                                    <label htmlFor="g-element-order">Element Order</label>
                                    <input className="form-control" type="number"
                                           name="element_order" id="g-element-order"
                                           min="1" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="g-element-color">Text Color</label>
                                    <input className="form-control" type="color"
                                           name="text_color" id="g-element-color"
                                           />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="g-element-bg-color">Background Color</label>
                                    <input className="form-control" type="color"
                                           name="background_color"
                                           id="g-element-bg-color"
                                           value="{{old('background_color')}}" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="g-element-visibility">Element Visibility</label>
                                    <select name="is_visible" id="g-element-visibility"
                                            className="form-control" >
                                        <option
                                            value="Y">
                                            Visible
                                        </option>
                                        <option
                                            value="N">
                                            Invisible
                                        </option>
                                    </select>
                                </div>

                                <div className="form-group  mb-3">
                                    <label htmlFor="g-element-type">Element Type</label>
                                    <select name="type" id="g-element-type"
                                            className="form-control" >
                                        <option
                                            value="button">
                                            Button
                                        </option>
                                        <option
                                            value="paragraph">
                                            Paragraph
                                        </option>
                                        <option
                                            value="link">
                                            External link
                                        </option>

                                        <option
                                            value="table">
                                            Table
                                        </option>
                                        <option
                                            value="input">
                                            Input
                                        </option>
                                        <option
                                            value="compare_api">
                                            Compare Api
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group  mb-3">
                                    <label htmlFor="g-element-provider-function">Data Provider
                                        Function</label>
                                    <input className="form-control" type="text"
                                           name="data_provider_function"
                                           id="g-element-provider-function"
                                           />
                                </div>
                                <Paragraph/>


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

export default AddPageElementModal;
