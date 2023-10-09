import React, {useState} from "react";
import axios from "axios";
import {useModal} from "../../Custom Hooks/useModal";

export default function AudioUploadPage() {
    const {modalProperties,showModal}=useModal();
    const [highLightAudio, setHighlightAudio] = useState(0);

    const {activePage} = modalProperties;
    const [audioFiles, setAudioFiles] = useState({
        audio_file_ban: activePage.audio_file_en || null,
        audio_file_en: activePage.audio_file_en || null,
    });

    const handleFileChange = (e) => {
        const {name, files} = e.target;
        setAudioFiles({
            ...audioFiles,
            [name]: files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("audio_page_id", activePage.id);
        formData.append("audio_file_ban", audioFiles.audio_file_ban);
        formData.append("audio_file_en", audioFiles.audio_file_en);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/upload-audio", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                console.log("Audio files uploaded successfully");
                showModal('none');

            } else {
                console.error("Upload failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    function playAudio(url, index) {
        setHighlightAudio(index);
        const audio = new Audio(url);
        audio.play();
    }

    const handleCloseModal = () => {
        showModal('none');
    };
    return (
        <div>
            <div className='modal fade show' tabIndex="-1" id="g-sivr-add-modal" style={{display: 'block'}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h5 className="modal-title">Audio File Upload <i className="ph-fill ph-music-note"></i></h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal}
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className=" mb-3 w-100" id="audioForm" method="POST"
                                  onSubmit={handleSubmit}
                                  encType="multipart/form-data"
                            >

                                <label htmlFor="audioInput_ban">Upload bangla audio file</label>
                                <input className="form-control" type="file" accept="audio/*"
                                       name="audio_file_ban"
                                       id="audioInput_ban" onChange={handleFileChange}/>
                                <label htmlFor="audioInput_en">Upload english audio file</label>
                                <input className="form-control" type="file" accept="audio/*"
                                       name="audio_file_en"
                                       id="audioInput_en" onChange={handleFileChange}/>


                                <button className="btn btn-success btn-sm mb-3 mt-3"
                                        type="submit">
                                    Upload
                                </button>
                            </form>

                            <h5>Uploaded Audio List:</h5>

                            <ul id="audioList" className='container-fluid  mx-3'>
                                <li className={highLightAudio === 1 && 'highlight'}
                                    onClick={activePage.audio_file_ban ? () => playAudio(`http://127.0.0.1:8000/storage/${activePage.audio_file_ban}`, 1) : null}

                                >
                                    Bangla Audio
                                    file:{activePage.audio_file_ban || 'No File Uploaded'}


                                    <button type="button" className="delete-icon-button"
                                    >
                                        <i
                                            className="ph-fill ph-trash-simple"></i>
                                    </button>


                                </li>


                                <li className={highLightAudio === 2 && 'highlight'}
                                    onClick={activePage.audio_file_en ? () => playAudio(`http://127.0.0.1:8000/storage/${activePage.audio_file_en}`, 2) : null}>
                                    English Audio
                                    file:{activePage.audio_file_en || 'No File Uploaded'}

                                    <button type="button" className="delete-icon-button"
                                    >
                                        <i className="ph-fill ph-trash-simple"></i>
                                    </button>

                                </li>
                            </ul>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-primary text-white" onClick={handleCloseModal}>
                                Close
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </div>
    );
}