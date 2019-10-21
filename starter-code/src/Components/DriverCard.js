import React from 'react';
import Rating from './Rating'

class DriverCard extends React.Component {
  render() {
    const { name, rating, img, car } = this.props

    return (
      <div className="DriverCard">
        <img src={img} alt="profileImage" />
        <div className="driverInfo">
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <div>{car.model} - {car.licensePlate} </div>
        </div>
      </div>
    )
  }
}

export default DriverCard;