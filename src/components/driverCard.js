import React from 'react';
import Rating from './rating.js'

const DriverCard = (props) => {
    return (
        <div className="driver-card">
            <div className="img-container">
                <img src={props.img}/>
            </div>
            <div className="info-driver">
                <h3>{props.name}</h3>
                <p><Rating>{props.rating}</Rating></p>
                <p>{props.car.model}  |  {props.car.licensePlate}</p>
            </div>
        </div>

    )
}

export default DriverCard;