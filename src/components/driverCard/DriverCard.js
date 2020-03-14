import React from "react";
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard-container">
      <div>
        <img src={img} alt="driver pciture" />
      </div>
      <div>
        <h3>{name}</h3>
        <h3>{rating}</h3>
        <h6>
          {car.model} - {car.licensePlate}
        </h6>
      </div>
    </div>
  );
};

export default DriverCard;
