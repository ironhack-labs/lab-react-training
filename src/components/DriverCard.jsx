import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = (props) => {
    return (
        <article class="driver-card">
            <div>
                <img src={props.img} width="152" height="152"></img>
            </div>
            <div>
                <b><p>{props.name}</p></b>
                <Rating className="driver-rating">{props.rating}</Rating>
                <p>
                    <span>{props.car.model} - </span>
                    <span>{props.car.licensePlate}</span>
                </p>
            </div>
        </article>
    )
}

export default DriverCard