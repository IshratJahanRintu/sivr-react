import React, {useEffect, useState} from "react";
import {useSivrPages} from "../../../Custom Hooks/SivrPageContext";

export default function TransferOptions({type}){
    const { allPages, getAllPages } = useSivrPages();
const [transferType,setTransferType]=useState('redirect');

    useEffect(() => {
        getAllPages();
    }, []);
    function redirectTransferOption(){
       return(
           <>
               <div className="form-group  mb-3">
                   <label htmlFor="button-redirect-to">Transfer page id:</label>
                   <select className="form-control" name="button_transfer_page_id" id="button-redirect-to">
                       <option value="" selected>No Page</option>
                       {allPages.children?allPages.children.map(page=>(<option value={page.id} >{page.page_heading_en}</option>)):""}

                   </select>
               </div>
           </>
       )
    }

    function gotoTransferOption(){
return (
  <>
      <div className="form-group  mb-3">
          <label htmlFor="button-go-to">Go to:</label>
          <select className="form-control" name="button_goto_page_id" id="button-go-to">
              <option value="" selected>No Page</option>
              {allPages.map(page=>(<option value={page.id} >{page.page_heading_en}</option>))}

          </select>
      </div>
      <div className="form-group  mb-3">
          <label htmlFor="button-back-page-id">Back page id:</label>
          <select className="form-control" name="button_back_page_id" id="button-back-page-id">

              <option value="" selected>No Page</option>
              {allPages.map(page=>(<option value={page.id} >{page.page_heading_en}</option>))}
          </select>
      </div>
  </>
);
    }

    return (
        <>
            <div className="form-group  mb-3">
                <label htmlFor="button-transfer-options">Transfer options:</label>
                <select className="form-control" name="button_transfer_options" id="button-transfer-options" onChange={(e)=>setTransferType(e.target.value)}>
                    <option value="redirect" >Redirect Page</option>
                    <option value="goto" >Goto Page</option>
                </select>
            </div>
            { transferType==='redirect'?redirectTransferOption():gotoTransferOption()}
        </>
    )

}