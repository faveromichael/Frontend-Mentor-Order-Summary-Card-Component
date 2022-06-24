import React from "react";
import "./CardButton.css";

export default function CardButton (props) {
    return (
        <React.Fragment>
            <input type="button" className={props.type} value={props.children}/>
        </React.Fragment>
    );
}