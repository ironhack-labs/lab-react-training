import React, { Component } from 'react';
import Rating from '../Rating';

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;

    const style = {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '90px',
      width: '150px',
      height: '150px',
      margin: '30px'
    }
    return (
      <div className="driverCard">
        <div style={style}></div>
        <div>        
          <p>{name}</p>
          {
            <Rating>{rating}</Rating>
          }
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    );
  }
}

export default DriverCard;