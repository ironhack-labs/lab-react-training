import React from 'react';
import Rating from '../Rating';
import './DriverCard.css';



const DriverCard = (props) => {
  const { name, rate, img, car } = props;

  return (
    <div className='box'>
      <div className="drivercard">
      <img src={img} alt='profile' />
      <div>
        <h3>{name}</h3>
        <Rating>{rate}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
      </div>
    </div>
  )
}

export default DriverCard;