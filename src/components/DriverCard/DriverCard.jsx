import React from 'react';
import './DriverCard.css';

function DriverCard({name, rating, img, car}) {
    const roundedRating = Math.round(rating)
    const stars = Array.from({ length: 5}, (_, index) => {
        if (index < roundedRating) {
            return '★'; 
          } else {
            return '☆';
          }
    });
    return (
        <div className='DriverCard'>
            <img className='driverImage' src={img} alt='DriverImage'/>
            <div className='DriverInfo'>
                <p><br />{name}<br /></p>
                <p>{stars}</p>
                <div>{`${car.model} - ${car.licensePlate}`}</div>
            </div>
        </div>
    )
}

export default DriverCard