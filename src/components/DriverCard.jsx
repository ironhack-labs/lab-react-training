import React from 'react';


const DriverCard = ({ name, rating, img, car }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  const filledStarElements = [];
  for (let i = 0; i < filledStars; i++) {
    filledStarElements.push(<span key={i}>★</span>);
  }

  const emptyStarElements = [];
  for (let i = 0; i < emptyStars; i++) {
    emptyStarElements.push(<span key={i}>☆</span>);
  }

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">
          {filledStarElements}
          {emptyStarElements}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;