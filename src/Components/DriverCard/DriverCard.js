import React from 'react';
import BoxColor from '../boxcolor/BoxColor';
import Rating from '../rating/Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  return (
    <BoxColor hex="#455eb5" class="m-2 rounded-3">
      <div className="d-flex justify-content-center align-items-center text-light p-2">
        <div>
          <img
            className="rounded-circle driver-picture"
            src={props.img}
            alt="Drive's Profile Pic"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>Name: Travis Kalanick</p>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model}-{props.car.licensePlate}
          </p>
        </div>
      </div>
    </BoxColor>
  );
};

export default DriverCard;