import React from "react";
import {useModal} from "../../Custom Hooks/useModal";

export default function PageElement({pageElement}) {
    const {showModal}=useModal();


    return (<>
        <ul className="nav nav-tabs mb-4" id="page-element-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="element-tab"
                        type="button"
                        role="tab"
                >
                    <i className="ph-fill ph-stack"></i>
                    Element Info
                </button>
            </li>
            <li className="nav-item">
                <a href="#">
                    <button
                        className="btn nav-link  d-inline-flex align-items-center gap-1"><i
                        className="ph-fill ph-pencil-simple-line"></i> Edit
                    </button>
                </a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#">
                    <button className="nav-link"
                    >
                        <i
                            className="ph-fill ph-upload"></i> Upload Menu Icon
                    </button>
                </a>
            </li>


            <li className="nav-item" role="presentation">
                <button onClick={()=>showModal('deleteElement',undefined,pageElement)} className="nav-link delete-page-element-btn"
                         type="button"

                        aria-selected="false">
                    <i
                        className="ph-fill ph-trash-simple"></i> Delete
                </button>
            </li>
        </ul>


        <div className="tab-content " id="nodeTabContent">

            <div className="tab-pane fade show active"
                 role="tabpanel"
                 aria-labelledby="element-tab" tabIndex="0">
                <div className="table-responsive ">
                    <table
                        className="table table-bordered table-striped table-sm border-secondary page-elements">
                        <tbody>
                        <tr>
                            <td>Element Type:</td>
                            <td>{pageElement.type}</td>
                        </tr>
                        <tr>
                            <td>Element Order</td>
                            <td>{pageElement.element_order}</td>
                        </tr>
                        <tr>
                            <td>Text (EN) :</td>
                            <td>{pageElement.display_name_en}</td>
                        </tr>
                        <tr>
                            <td>Text (BN) :</td>
                            <td>{pageElement.display_name_bn}</td>
                        </tr>
                        <tr>
                            <td>Text Color :</td>
                            <td>{pageElement.text_color}</td>
                        </tr>
                        <tr>
                            <td>Background Color :</td>
                            <td>{pageElement.background_color}</td>
                        </tr>

                        <tr>
                            <td>Element Visibility :</td>
                            <td>{pageElement.is_visible}</td>
                        </tr>
                        <tr>
                            <td>Data Provider Function :</td>
                            <td>{pageElement.data_provider_function}</td>
                        </tr>
                        <tr>
                            <td>Element properties :</td>
                            <td className="text-wrap">{pageElement.element_properties}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="tab-pane fade" role="tabpanel"
                 aria-labelledby="upload-tab"
                 tabIndex="0">Upload
            </div>

        </div>
    </>);
}