import React from "react";

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">{stars}</div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
