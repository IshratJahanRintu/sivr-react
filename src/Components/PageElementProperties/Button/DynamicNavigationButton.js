import React, {useEffect, useState} from "react";
import ButtonTitle from "./ButtonTiltle";
import {useSivrPages} from "../../../Custom Hooks/SivrPageContext";
export default function DynamicNavigationButton(){

    const [title_type,setTitleType]=useState('static');


    function handleTitleTypeChange(e) {

        setTitleType(e.target.value);

    }

    return(
        <>
            <div className="form-group  mb-3">
                <label htmlFor="button-title-type">Title type:</label>
                <select className="form-control" name="button_title_type" id="button-title-type" onChange={handleTitleTypeChange} >
                    <option value="static" >Static</option>
                    <option value="dynamic" >Api</option>

                </select>
            </div>
            <ButtonTitle type={title_type} />
        </>

    );
}