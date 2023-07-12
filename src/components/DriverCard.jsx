import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

function DriverCard({ name, rating, img, car }) {
  const starRating = Math.floor(rating);

  return (
    <div className="driver-card">
      <img className="driver-img" src={img} alt="driver" />
      <div>
        <h2>{name}</h2>
        <div className="rating-star">
          {[1, 2, 3, 4, 5].map((value, index) =>
            starRating >= index + 1 ? <BsFillStarFill /> : <AiOutlineStar />
          )}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
