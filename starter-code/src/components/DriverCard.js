import React from 'react'
import Rating from './Rating'

function DriverCard({name, img, rating, car}) {
    return (
        <div className="drivercard">
            <img src={img}/>
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
