import React from 'react';
import Rating from "./Rating";
import "./../styles/DriverCard.css";

function DriverCard(props) {
    return (
            <div className="DriverCard">
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <img src={props.img} alt="Profile"/>
            </div>
    )
}

export default DriverCard
