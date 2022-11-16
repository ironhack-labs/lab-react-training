import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const newRating = Math.round(rating);
  return (
    <div className="custom-card driver-card">
      <img src={img} alt="" />
      <div className="">
        <p>{name}</p>
        <p>{'★'.repeat(newRating) + '☆'.repeat(5 - newRating)}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
