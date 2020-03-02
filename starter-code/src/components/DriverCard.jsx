import React, { Component } from 'react';
import './DriverCard.css';

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;

    const roundNumber = Math.round(rating);
    const stars = [];

    for (let i = 0; i <= 5; i++) {
      if (i <= roundNumber) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }

    return (
      <div className="driver-card">
        <div className="driver-card-img">
          <img src={img} alt={name} />
        </div>
        <div className="driver-card-info">
          <h2>{name}</h2>
          <h2>{stars}</h2>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
