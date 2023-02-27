import React from 'react';

export const DriverCard = ({ name, rating, img, car }) => {
  const stars = Math.round(rating);
  const emptyStars = 5 - stars;
  const icon = '⭐️'; 
  const filledStars = icon.repeat(stars);
  const emptyStar = icon.repeat(emptyStars);

  return (
    <div className="driver-card">
      <img src={img} alt={`${name} avatar`} />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">
          {filledStars}
          {emptyStar}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;