import React from 'react';
import './DriverCard.css';
import {Rating} from '../Rating/Rating';

function DriverCard(props) {
    return(
        <div id="driver-card">
            <img className='driver-img' src={props.img} />
            <div className='driver-card-text'>
                <p><strong>{props.name}</strong></p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export {DriverCard};