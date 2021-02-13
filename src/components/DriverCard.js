import React from 'react';

export default function DriverCard({
  name,
  rating,
  img,
  car: { model, licensePlate },
}) {
  function stars(rating) {
    const x = Math.round(rating);
    switch (x) {
      case 0:
        return <div className="stars">☆☆☆☆☆</div>;
      case 1:
        return <div className="stars">★☆☆☆☆</div>;
      case 2:
        return <div className="stars">★★☆☆☆☆</div>;
      case 3:
        return <div className="stars">★★★☆☆</div>;
      case 4:
        return <div className="stars">★★★★☆</div>;
      default:
        return <div className="stars">★★★★★</div>;
    }
  }

  return (
    <div className="driverCardMainContainer">
      <img className="driverCardImage" src={img} alt={name} />
      <div className="driverCardDataContainer">
        <div className="driverCardName">{name}</div>
        <div className="dirverCardRating">{stars(rating)}</div>
        <div className="driverCardCar">
          {model} - {licensePlate}
        </div>
      </div>
    </div>
  );
}
