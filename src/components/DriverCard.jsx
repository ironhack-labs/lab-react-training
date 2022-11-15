import React from 'react';
import IdCard from './IdCard';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  function stars(rating) {
    switch (Math.round(rating)) {
      case 0:
        return '☆☆☆☆☆';
      case 1:
        return '★☆☆☆☆';
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return;
    }
  }
  return (
    <div className="drivePhoto">
      <img src={img} alt="profile" />
      <div className="drive">
        <p>{name}</p>
        <p>{stars(rating)}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
