import React from "react";

export default  function ConfirmButton(){
    return (
        <>
            <div className="form-group  mb-3">
                <label htmlFor="button-confirmation-message-en">Button Confirmation Message (EN):</label>
                <input type="text" className="form-control" name="button_confirmation_message_english"
                       id="button-confirmation-message-en" />

            </div>
            <div className="form-group  mb-3">
                <label htmlFor="button-confirmation-message-ban">Button Confirmation Message (BAN):</label>
                <input type="text" className="form-control" name="button_confirmation_message_bangla"
                       id="button-confirmation-message-ban" />

            </div>
        </>
    )
}