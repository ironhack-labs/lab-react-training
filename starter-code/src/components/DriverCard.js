import React from 'react'
import Rating from './Rating'

function DriverCard({name, rating, img, car}) {
    return (
        <div className="drivercard">
            <img src={img} />
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car}</p>
            </div>
        </div>
    )
}

export default DriverCard
