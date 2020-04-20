import React, { Component } from 'react';
import Rating from '../components/Rating';


class DriverCard extends Component {
  render() {
    const { name, rating, img, car,  } = this.props;
    return (
      <div className="driver-card-container">
        <img className="drivercard-img" src={ img } alt=""/>
        <div className="driver-info-box">
          <p className="driver-name"><strong>{ name }</strong></p>
          <Rating className="driver-rating">{ rating }</Rating>
          <p className="driver-car">{ car.model } - { car.licensePlate }</p>
        </div>
      </div>
    )
  }
}

export default DriverCard;