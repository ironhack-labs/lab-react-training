import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const stars = Rating(rating); //wanted to call the "Rating" function here and get the stars, couldn't make it work
  return (
    <div>
      <p>{name}</p>
      <p>{stars}</p>
      <img src={img} alt="carProfilePicture" className="carProfilePicture" />
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;