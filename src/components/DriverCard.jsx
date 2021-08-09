import React from 'react'
import Rating from './Rating'


function DriverCard({name, rating, img, car:{model,licensePlate}}) {
    return (
        <div>
            <div>
                <img src={img} alt="driver card" />
            </div>
            <div>
                <h4>{name}</h4>
                <Rating>{rating}</Rating>
                <p>{model}-{licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;