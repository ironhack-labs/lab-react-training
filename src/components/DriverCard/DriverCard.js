import React from 'react';
import IdCard from '../IdCard/IdCard';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className='driver-card'>
      <img src={img} alt='profile pic' />
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;
