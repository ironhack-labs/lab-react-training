import React, { Component } from 'react';
import './DriverCard.css';
import Rating from './Rating';

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;

    return (
      <div className="driver-card">
        <img src={img} alt={name} />
        <div className="driver-card-info">
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
