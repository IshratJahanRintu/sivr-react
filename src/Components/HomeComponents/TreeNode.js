import React, {useEffect, useState} from "react";
import Tree from "./Tree";

import ContextMenu from "./ContextMenu";
export default function TreeNode({node,contextMenuProperties,hideContextMenu,showContextMenu}){

  const hasChildren=node.children.length>0;
  const [childOpened,setChildOpened]=useState(false);
    const {visibility:contextMenuVisibility,activeNode,...contextMenuStyle}=contextMenuProperties;


    useEffect(() => {
        const handleGlobalClick = (e) => {
            if (!e.target.closest(".context-menu")) {
               hideContextMenu();
            }
        };
        window.addEventListener("click", handleGlobalClick);


    }, []);

    const toggleContextMenu = (e) => {
        console.log(node);
        e.stopPropagation();
       showContextMenu(node, e.pageX, e.pageY);

        e.preventDefault();



    };
    const toggleChild = (e) => {
        e.stopPropagation();
        hideContextMenu();

        setChildOpened(!childOpened);
    };

   return (
       <>
       { contextMenuVisibility &&  <ContextMenu activeNode={activeNode}  contextMenuStyle={contextMenuStyle}  />}
      <li  onClick={toggleChild} className={hasChildren ? ('folder' + ' ' + (childOpened ? 'folder-open' : '')) : 'file'}>
          <span onContextMenu={toggleContextMenu}>{node.page_heading_en}</span>

           {hasChildren && childOpened && <Tree data={node.children}  contextMenuProperties={contextMenuProperties} showContextMenu={showContextMenu} hideContextMenu={hideContextMenu}  />}

       </li></>


          )
}