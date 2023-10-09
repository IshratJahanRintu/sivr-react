import React from "react";

export default function ResendButton() {

    return (
        <>
            <div className="form-group  mb-3">
                <label htmlFor="button-otp-resend-message-en">OTP Resend Message (EN):</label>
                <input type="text" className="form-control" name="button_otp_resend_message_english"
                       id="button-otp-resend-message-en"/>

            </div>
            <div className="form-group  mb-3">
                <label htmlFor="button-otp-resend-message-ban">OTP Resend Confirmation Message (BAN):</label>
                <input type="text" className="form-control" name="button_otp_resend_message_bangla"
                       id="button-otp-resend-message-ban"/>

            </div>
            <div className="form-group mb-3">
                <label htmlFor="otp-resend-time">OTP Resend Time (Minute):</label>
                <input type="number" className="form-control" name="button_otp_resend_time" id="otp-resend-time"
                />

            </div>
        </>

    );

}