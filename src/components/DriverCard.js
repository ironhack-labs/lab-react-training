import React from 'react'
import Rating from './Rating';
import './DiverCard.css';

export default function DriverCard(props) {
    return (
        <card className="driverCard">
        <img className="driverImg" src={props.img} />
                <div className="driverText">
          <h4>{props.name}</h4>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} {props.car.licensePlate}
          </p>
        </div>
      </card>
    )
}
