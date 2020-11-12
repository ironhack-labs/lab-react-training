import React from 'react';
import Rating from '../rating/Rating';

import './DriverCard.css';

function DriverCard(props){
    return(
        <div className="driverCard">
            <img src={props.img}/>
            <div className="content">
                <p><strong>{props.name}</strong></p>
                <Rating>{props.rating}</Rating>
    <p>{props.car.model} - {props.car.licensePlate}</p>
  </div>
        </div>
    )
}

export default DriverCard;