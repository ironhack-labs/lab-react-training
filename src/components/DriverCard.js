import React from 'react';
import './Rating.js';
import './DriverCard.css';

function DriverCard(props) {
    
    return (
        <div className="DriverCard">
            <img src={props.img} alt="avatar"></img>
            <div className="infoDiv">
                <h5>{props.name}</h5>
                <p>{props.stars}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}


export default DriverCard;