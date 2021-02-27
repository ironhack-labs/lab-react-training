import React from 'react';
import Rating from './Rating';

class DriverCard extends React.Component {
  render() {
    return (
      <div class="driverCard">
        <img src={this.props.img} alt="profile picture" class="image" />

        <div class="right">
          <div class="driverName">{this.props.name}</div>
          <div class="driverRating">
            <Rating>{this.props.rating}</Rating>
          </div>
          <div>
            <span class="carModel">{this.props.car.model} - </span>
            <span class="carLicense">{this.props.car.licensePlate}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DriverCard;
