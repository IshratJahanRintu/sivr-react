import React from "react";
import axios from "axios";
import {useModal} from "../../Custom Hooks/useModal";

export default function DeleteSivrPage(){
    const {modalProperties,showModal}=useModal();
    const handleDeleteConfirm=async (e)=>{
        e.preventDefault();
        const {activePage}=modalProperties;
        console.log(activePage);
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/delete-sivr-page/' + activePage.id

            );

            if (response.status === 200) {

                console.log('delete successful');
                showModal('',{});
            } else {

                console.error('delete failed');
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
                    <div className="modal-content py-3">
                        <form onSubmit={handleDeleteConfirm} method="POST">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Page</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4 text-center">

                                Do you really want to delete this page?

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-sm btn-primary text-white">
                                    Yes
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