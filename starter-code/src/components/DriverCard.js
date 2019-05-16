import React from "react";
import Rating from "./Rating";
import "./DriverCard.css";

const DriverCard = ({ name, rating, img, car }) => {
  const { model, licensePlate } = car;
  return (
    <div className="card">
      <img className="profileImg" src={img} alt={name} />
      <div className="profileData">
        <span className="is-size-4">{name}</span>
        <Rating>{rating}</Rating>
        <span>{model}-{licensePlate}</span>
      </div>
    </div>
  );
};

export default DriverCard;
