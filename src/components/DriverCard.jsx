import React, { Component } from 'react';
import Rating from './Rating.jsx';

export class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;
    return (
      <div>
        <img src={img} alt="profile" />
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} {car.licensePlate}
        </p>
      </div>
    );
  }
}

export default DriverCard;
