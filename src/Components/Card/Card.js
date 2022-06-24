import React from "react";
import CardCover from "./CardCover/CardCover";
import hero from "../../Assets/Images/illustration-hero.svg";
import CardPlan from "./CardPlan/CardPlan";
import CardButton from "./CardButton/CardButton";
import "./Card.css";

export default function Card (props) {
    return(
        <div className="card-body">
            <CardCover imageSrc={hero}/>

            <h1 className="card-title">Order Summary</h1>

            <p className="card-description">You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!</p>

            <CardPlan planType="Annual Plan" planPrice="$59.99/year"/>

            <CardButton type="primary">Proceed to Payment</CardButton>
            <CardButton type="secondary">Cancel Order</CardButton>
        </div>
    );
}