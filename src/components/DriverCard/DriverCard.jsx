import React from "react";
import "./DriverCard.css";
import Rating from "../Rating/Rating";

export default function DriverCard(props) {
  return (
    <div className="dc-container">
      <img src={props.img} alt="picturito" />
      <div className="dc-content">
        <div>
          {props.name}
        </div>
        <div>
          <Rating>{props.rating}</Rating>
        </div>
        <div>
          <span>
            {props.car.model} - {props.car.licensePlate}
          </span>
        </div>
      </div>
    </div>
  );
}
