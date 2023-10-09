// ContextMenu.js
import React from 'react';
import {Link} from "react-router-dom";
import {useModal} from "../../Custom Hooks/useModal";


function ContextMenu({activeNode, contextMenuStyle}) {
    const {showModal} = useModal();

    const openModal = (e, type) => {
        e.stopPropagation();
        showModal(type, activeNode);
    }

    console.log(activeNode);
    return (
        <div className="context-menu" style={contextMenuStyle}>
            <ul className="list-group">
                <li onClick={(e) => openModal(e, 'add')}><i className="ph-fill ph-plus"></i> Add Branch</li>
                <li onClick={(e) => openModal(e, 'edit')}><i className="ph-fill ph-pencil-simple"></i>Edit</li>
                <li onClick={(e) => openModal(e, 'audio')}><i className="ph-fill ph-upload"></i> Upload File</li>
                <li onClick={(e) => openModal(e, 'pageElement')}><i className="ph-fill ph-circles-three-plus"></i>Page Elements</li>
                <li onClick={(e) => openModal(e,'delete')}><i className="ph-fill ph-trash-simple"></i>Delete Tree</li>
            </ul>
        </div>
    );
}

export default ContextMenu;
