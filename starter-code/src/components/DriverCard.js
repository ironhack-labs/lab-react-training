import React from 'react';
import Rating from './Rating';


function DriverCard(props) {
    return (
        <div id="DriverCard" >
            <div id="circular">
                <img src={props.img} alt=""/>
            </div>
            <div>
                <h2>{props.name}></h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate} </p>
            </div>
        </div>
    )
}

export default DriverCard;
