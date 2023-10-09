import React from "react";

export default function ButtonTitle({type}){

function dynamicTitle(){
    return (
        <>
            <div className="form-group  mb-3">
                <label htmlFor="button-value-api-key">Button value Api Key:</label>
                <input type="text" className="form-control" name="button_value_api_key" id="button-value-api-key"
                       />

            </div>
            <div className="form-group  mb-3">
                <label htmlFor="button-api-title-en">Button Api Title Key(EN):</label>
                <input type="text" className="form-control" name="button_api_title_english" id="button-api-title-en"
                       />

            </div>
            <div className="form-group  mb-3">
                <label htmlFor="button-api-title-ban">Button Api Title Key(BN):</label>
                <input type="text" className="form-control" name="button_api_title_bangla" id="button-api-title-ban"
                      />

            </div></>
    );
}

function staticTitle(){
return (
    <>
        <div className="form-group  mb-3" id="button-title-english">
            <label htmlFor="button-title-en">Button Title(EN):</label>
            <input type="text" className="form-control" name="button_title_english" id="button-title-en"
                  />

        </div>
        <div className="form-group  mb-3" id="button-title-bangla">
            <label htmlFor="button-title-ban">Button Title(BN):</label>
            <input type="text" className="form-control" name="button_title_bangla" id="button-title-ban"
                  />

        </div></>
);


}

    return (type==='static'?staticTitle():dynamicTitle());

}