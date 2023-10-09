import React, {useState} from "react";
import StaticNavigationButton from "./StaticNavigationButton";
import DynamicNavigationButton from "./DynamicNavigationButton";
import TransferOptions from "./TransferOptions";
import ButtonTypeWiseElement from "./ButtonTypeWiseElement";

export default function Button() {

    const [type,setType]=useState('static_navigation');
    const handleChange=(e)=>{
        setType(e.target.value)

    }


    return (
        <div id='element-type-wise-value'>
            <div className="form-group mb-3">
                <label htmlFor="button-type">Button Type:</label>
                <select name="button_type" id="button-type"
                        className="form-control" onChange={handleChange}>
                    <option value="static_navigation">
                        Navigation Static
                    </option>
                    <option value="dynamic_navigation">
                        Navigation Dynamic
                    </option>
                    <option value="submit">
                        Submit
                    </option>
                    <option value="confirm">
                        Confirm
                    </option>

                    <option value="resend">Resend</option>


                </select>
            </div>
            <ButtonTypeWiseElement type={type} />
            <TransferOptions />
        </div>
    );
}
