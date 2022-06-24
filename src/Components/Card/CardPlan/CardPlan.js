import React from "react";
import icon from "../../../Assets/Images/icon-music.svg";
import "./CardPlan.css";

export default function CardPlan (props) {
    return (
        <div className="plan">
            <img src={icon} className="plan-icon" alt="hero"/>
            <div className="pricing-container">
                <h2 className="plan-title">{props.planType}</h2>
                <h4 className="plan-pricing">{props.planPrice}</h4>
            </div>
            <a href="" className="plan-cta ">Change</a>
        </div>
    );
}