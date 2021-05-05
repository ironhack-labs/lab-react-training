import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rating from './Rating';

export default function DriverCard(props) {




  return (
    <div className="driverCard">
      <div>
        <img className="imgPerson" src={props.img} width="100" />
      </div>
      <div className="detailsDriver">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <h5>{props.car.model} - {props.car.licensePlate}</h5>
      </div>
    </div>
  );
}