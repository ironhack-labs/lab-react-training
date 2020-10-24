import React from 'react';
import Rating from '../Rating/Rating'

export default function DriverCard(props){
    return(
        <div className='driverCard'>
            <div id='circle'>
                <img id='driver' alt='driverface' src={props.img}></img>
            </div>
            <div id='driver-text'>
                <p>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}