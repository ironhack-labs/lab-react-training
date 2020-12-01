import React from 'react';
import Rating from '../rating/Rating';

const DriverCard = ({ name, rating, img, car }) => {
  console.log(name, rating, img, car);
  return (
    <>
      {/* <img src={img} alt="" /> */}

      <h3>{name}</h3>
      <Rating>{rating}</Rating>
      <h4>
        {car.model} - {car.licensePlate}
      </h4>
    </>
  );
};

export default DriverCard;
