import React from 'react';
import Rating from '../Rating/Rating';

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  console.log('Ratingdriver', rating);
  return (
    <article className="driver">
      <div className="container">
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <p>
            {model} - {licensePlate}
          </p>
        </div>
      </div>
    </article>
  );
};

export default DriverCard;
