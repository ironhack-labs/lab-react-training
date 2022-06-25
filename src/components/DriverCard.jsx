import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="container">
      <img src={props.img} alt="Id picture" className="idPicture" />
      <div className="info">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>{`${props.car.model} - ${props.car.licensePlate}`}</p>
      </div>
    </div>
  );
};

export default DriverCard;
