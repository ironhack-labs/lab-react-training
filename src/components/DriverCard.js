import React from 'react';
import Rating from './Rating'
import '../assets/css/DriveCard.css'
const DriverCard = (props) => {

    const {
        name,
        rating,
        img,
        car
    } = props;
    return (
        <div className='DriverCard'>
            <div className='DriverCardItems'>
                <img src={img} />
                <div>
                    <h2>{name}</h2>
                    <Rating className='Rating' n={rating} />
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        </div>)
}

export default DriverCard