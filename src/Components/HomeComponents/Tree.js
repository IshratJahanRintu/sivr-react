import React, {useEffect, useState} from "react";

import TreeNode from "./TreeNode";
export default function Tree({data,contextMenuProperties,showContextMenu,hideContextMenu}){



    return (

            <ul >{data.map((sivrPage)=><TreeNode node={sivrPage}   contextMenuProperties={contextMenuProperties} showContextMenu={showContextMenu} hideContextMenu={hideContextMenu} />) }</ul>


    );
}