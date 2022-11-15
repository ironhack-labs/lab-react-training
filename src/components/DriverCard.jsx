import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
    const { img, name, rating, car } = props;
    return (
        <div className='driverCard'>

            <div><img src={img} alt="" /></div>

            <div><h2>{name}</h2></div>

            <div><Rating>{rating}</Rating></div>

            <div><p>{car.model} - {car.licensePlate}</p></div>

        </div>
    )
}

export default DriverCard