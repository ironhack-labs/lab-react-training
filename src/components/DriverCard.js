import React from 'react';
import './DriverCard.css';

const DriverCard = props => { 

  // Display rating stars
  let ratingStars = '';
  let ratingNum = Math.round(props.rating);
  
  switch(ratingNum) {
    case 0: 
      ratingStars = '☆☆☆☆☆';
      break;
    case 1:
      ratingStars = '★☆☆☆☆';
      break;
    case 2:
      ratingStars = '★★☆☆☆';
      break;
    case 3:
      ratingStars = '★★★☆☆';
      break;
    case 4:
      ratingStars = '★★★★☆';
      break;
    case 5:
      ratingStars = '★★★★★';
      break;      
    default:
      ratingStars = 'No rating';
  }

  // Car info
  const carInfo = `${props.car.model} - ${props.car.licensePlate}`;

  return (
    <div className='drivercard'>
      <div className='drivercard__box'>
        <div>
          <img className='drivercard__img' src={props.img} alt='driver'/>
        </div>
        <div className='drivercard__info'>
          <h2 className='drivercard__name'>{props.name}</h2>
          <h2 className='drivercard__rating'>{ratingStars}</h2>
          <div className='drivercard__car-info'>
            <p>{carInfo}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverCard;