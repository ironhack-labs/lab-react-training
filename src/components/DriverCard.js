// components/DriverCard.js

import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const divStyle = {
    color: 'white',
    backgroundColor: '#455eb5',
  }

  return (
    <div className='driver-card' style={divStyle}>
      <img alt='portrait' src={img} />
      <div className='personal-info'>
        <span className='name'>{name}</span>
        <Rating>{rating}</Rating>
        <span className='model-plate'>{car.model} - {car.licensePlate}</span>
      </div>
    </div>
  );
}

export default DriverCard;
