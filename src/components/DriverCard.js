import React from 'react';
import './Rating.js';
import './DriverCard.css';

function DriverCard(props) {
    
    return (
        <div className="driverCardContainer">
            <img src={props.img} alt="avatar"></img>
            <div className="infoDriverCard">
                <h2 className="driverName"><b>{props.name}</b></h2>
                <p className="driverStars">{props.rating}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}


export default DriverCard;