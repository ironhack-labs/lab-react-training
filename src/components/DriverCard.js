import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

{
  /* <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} /> */
}

export default function DriverCard(props) {
  return (
    <>
      <div className="driver-card">
        <div className="avatar">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="driver-card-details">
          <div className="name">{props.name}</div>
          <div className="rating">
            <Rating>{props.rating}</Rating>
          </div>
          <div className="car">
            {props.car.model} {props.car.licensePlate}
          </div>
        </div>
      </div>
    </>
  );
}
