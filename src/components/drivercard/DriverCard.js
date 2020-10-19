import React from 'react'
import Rating from '../Rating/Rating'
import './DriverCard.css'

export default function DriverCard(props) {
    return (
        <div className='driver-card'>
        
            <img src={props.img} alt={props.name}></img>
            <div>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>

        </div>
    )
}
