import React from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css';

export default class DriverCard extends React.Component {
  render() {
    const { name, rating, img, car } = this.props;

    return (
      <div className="DriverCard">
        <div className="DriverCard-img">
          <img src={img} alt={name} />
        </div>
        <div className="DriverCard-name">
          <h3>{name}</h3>
          <Rating className="DriverCard-rating">{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}
