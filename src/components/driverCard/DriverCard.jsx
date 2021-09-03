import React from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css';

class DriverCard extends React.Component {
  render() {
    return (
      <div className="driverCard">
        <img src={this.props.img} alt="photo driver" />
        <div className="driverInfo">
          <h2>{this.props.name}</h2>
          <Rating>{this.props.rating}</Rating>
          <p>
            {this.props.car.model} - {this.props.car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
