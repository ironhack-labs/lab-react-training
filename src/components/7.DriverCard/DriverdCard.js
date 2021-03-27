import React from 'react'
import Rating from '../6.RatingStar/Rating'
import './Driver.scss'

const DriverdCard = ({name, rating, img, car}) => {
    return (
        <div className="DriverdCard">
            <img src={img} alt={name} />
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <p>{car.licensePlate}</p>
            <p>{car.model}</p>
        </div>
    )
}

export default DriverdCard
