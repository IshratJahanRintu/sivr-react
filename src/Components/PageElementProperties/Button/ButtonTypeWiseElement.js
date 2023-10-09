import React from "react";
import StaticNavigationButton from "./StaticNavigationButton";
import DynamicNavigationButton from "./DynamicNavigationButton";
import ConfirmButton from "./ConfirmButton";
import ResendButton from "./ResendButton";
import SubmitButton from "./SubmitButton";
export  default function ButtonTypeWiseElement({type}){

    return (
        <>
            {type==='static_navigation' && <StaticNavigationButton />}
            {type==='dynamic_navigation' && <DynamicNavigationButton />}
            {type==='confirm' && <ConfirmButton />}
            {type==='resend' &&<ResendButton />}
            {type==='submit' && <SubmitButton />}

        </>
    );

}