import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div>
      <h2>{name}</h2>

      {Math.floor(rating)}
      {rating < 1 && rating >= 0 && <h2>☆☆☆☆☆</h2>}
      {rating === 1 && <h2>★☆☆☆☆</h2>}

      {rating < 2 && rating >= 1 && <h2>★☆☆☆☆</h2>}
      {rating === 2 && <h2>★★☆☆☆</h2>}

      {rating < 3 && rating >= 2 && <h2>★★☆☆☆</h2>}
      {rating === 3 && <h2>★★★☆☆</h2>}

      {rating < 4 && rating >= 3 && <h2>★★★☆☆</h2>}
      {rating === 4 && <h2>★★★★☆</h2>}

      {rating < 5 && rating >= 4 && <h2>★★★★☆</h2>}
      {rating >= 5 && <h2>★★★★★</h2>}

      <img src={img} alt="Profile Image" />

      <h3>{car.model}</h3>
      <h3>{car.licensePlate}</h3>
    </div>
  );
}

export default DriverCard;
