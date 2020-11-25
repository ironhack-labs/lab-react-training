import React from 'react';
import './DriverCard.css';

const DriverCard = (prop) => {

  let emptyStar = '☆';
  let filledStar = '★';

  const rounded = (rate) => {
    let remaining = rate - Math.floor(rate);
    return (remaining >= 0.5 ? Math.floor(rate) + 1 : Math.floor(rate))
  }

  const showStars = (rate) => filledStar.repeat(rounded(rate)) + emptyStar.repeat(5 - rounded(rate));

  return (
    <div className='driverContainer'>
      <div className='imgDiv' style={{backgroundImage:`url(${prop.img})`}}>
      </div>
      
      <div className='driverInfo'>
        <h5>{prop.name}</h5>
        <p className='carStars'>{showStars(prop.rating)}</p>
        <p className='modelCar'>{prop.car.model} - {prop.car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;