import React, { Component } from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';


class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props; 
    return(
      <div className='DriverCard'>
          <img className='DriverCardImg'src={img} alt={name} />
          <div className='DriverCardInfo'>
            <p className='DriverCardName'>{name}</p>
            <Rating>{rating}</Rating>
            <p> {car.model} - {car.licensePlate}</p>
          </div>
      </div>
    )
  }
}

export default DriverCard;