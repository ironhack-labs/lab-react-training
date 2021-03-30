import React from 'react'
import Rating from '../6.RatingStar/Rating'
import './Driver.scss'

const DriverdCard = ({name, rating, img, car}) => {
    return (
        <div className="DriverdCard">
            <div>
                <img className="driverCardimg" src={img} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{car.licensePlate}</p>
                <p>{car.model}</p>
                <Rating>{rating}</Rating>
            </div>
        </div>
    )
}

export default DriverdCard
