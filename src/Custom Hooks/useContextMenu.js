import { useState } from 'react';

export function useContextMenu() {
    const [contextMenuProperties, setContextMenuProperties] = useState({

        left: 0,
        top: 0,
        activeNode: null,
    });
    const showContextMenu = (activeNode, left, top) => {
        setContextMenuProperties({
            visibility: true,
            left,
            top,
            activeNode,
        });
    };

    const hideContextMenu = () => {
        setContextMenuProperties({
            visibility: false,
            left: 0,
            top: 0,
            activeNode: null,
        });
    };

    return { contextMenuProperties, showContextMenu, hideContextMenu };
}
