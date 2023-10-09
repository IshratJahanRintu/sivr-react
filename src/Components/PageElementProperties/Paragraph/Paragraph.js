import React from "react";

export default function Paragraph(){
    return (
        <>
            <div className="form-group col-md-4 mb-3">
                <label htmlFor="g-element-text-en">Display Text (EN)</label>
                <textarea className="form-control"
                          name="display_name_en"
                          id="g-element-text-en"
                ></textarea>
            </div>
            <div className="form-group col-md-4 mb-3">
                <label htmlFor="g-element-text-bn">Display Text (BN)</label>
                <textarea className="form-control"
                          name="display_name_bn"
                          id="g-element-text-bn"
                ></textarea>
            </div>
            <div className="form-group col-md-4 mb-3">
                <label htmlFor="paragraph-api-count">Paragraph Api Count:</label>
                <input className="form-control" name="paragraph_api_count" id="paragraph-api-count" type="number"
                       min="1" max="10" />
            </div>


        </>
    )
}