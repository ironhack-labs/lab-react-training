import React from 'react'
import Rating from './Rating';

const DriverCard = (props) => {
 const{name, rating, img, car} = props;
  return (
    <div className='carDriver'>
        <div className='imgConatinerDriver'><img  src={img} alt=""/></div>
        <div className='left'>
            <strong>{name}</strong>
            <Rating>{rating}</Rating>
            <div>
                <span>{car.model}</span>
                <span>{car.licensePlate}</span>
            </div>
        </div>
    </div>
  )
}

export default DriverCard
