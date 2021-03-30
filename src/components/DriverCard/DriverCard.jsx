import React from 'react'
import './DriverCard.scss'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className='DriverCard'>
            <img src={img} alt={name} />
            <div>
                <h4>{ name }</h4>
                <Rating>{ rating }</Rating>
                <span>{ car.model } - { car.licensePlate }</span>
            </div>
        </div>
    )
}

export default DriverCard
