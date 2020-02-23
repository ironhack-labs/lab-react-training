import React from 'react'
import Rating from './Rating'

function DriverCard({name, rating, img, car}) {
    return (
        <div className="drivercard">
            <img src={img} width="100"/>
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model}{car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
