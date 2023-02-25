import React from 'react';

export const DriverCard = ({
  name,
  rating,
  img,
  car: { model, licensePlate },
}) => {
  const stars = Math.round(rating);
  const emptyStars = 5 - stars;
  const filledStars = '★'.repeat(stars);
  const emptyStar = '☆'.repeat(emptyStars);
  return (
    <div className="driver-card">
      <div className="driver-card-img">
        <img src={img} alt={name} />
      </div>
      <div className="driver-card-info">
        <h2>{name}</h2>
        <div className="driver-card-rating">
          {filledStars}
          {emptyStar}
        </div>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};
