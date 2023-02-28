import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="driverCard">
      <img src={img} alt="" className="imgDriver" />
      <h3>{name}</h3>
      {rating < 5 && rating >= 4 && <h3>★★★★☆</h3>}
      {rating >= 5 && <h3>★★★★★</h3>}
      <h5>{car.model}</h5>
      <h5>{car.licensePlate}</h5>
    </div>
  );
}

export default DriverCard;
