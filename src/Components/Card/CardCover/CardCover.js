import React from "react";
import "./CardCover.css";

export default function CardCover (props) {
    return (
        <div className="cover-container">
            <img src={props.imageSrc} className="cover-img" alt="hero"/>
        </div>
    );
}