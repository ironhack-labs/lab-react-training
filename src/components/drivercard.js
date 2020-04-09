import React, { Component } from "react";
import Rating from './rating';

class DriverCard extends Component {
  render () {
    const { name, rating, img, car } = this.props;
    return (
      <div className="drivercard-box">
        <img className="drivercard-img" src={img} alt=""/>
        <div>
          <p className="drivercard-name">{name}</p>
          <Rating className="drivercard-rating">{rating}</Rating>
          <p className="drivercard-car">{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    )
  }
}

export default DriverCard;