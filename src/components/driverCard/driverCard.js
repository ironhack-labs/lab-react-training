import React, {Component} from 'react';
import './index.css';
import Rating from "../rating/Rating";

class DriverCard extends Component {
  render() {
    const {name,rating,img,car} = this.props;
    return (
      <div className={'driverCard'}>
        <img src={img} alt=""/>
        <div className={'info'}>
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    );
  }
}

export default DriverCard;