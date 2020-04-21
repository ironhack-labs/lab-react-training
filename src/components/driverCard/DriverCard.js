import React, { Component } from 'react'
import '../driverCard/DriverCard.css'
import Rating from '../rating/Rating';

class DriverCard extends Component {

  render(){

    const {name, rating, img, car} = this.props;
    return(
      <div className="driverCard">  
          <div>
            <img className="photo-driver-card" src={img} />
          </div>
          <div className="info-driver-card">
            <p><strong>{name}</strong></p>
            <Rating stars={rating} className="rating-driver-card" />
            <p className="car-info">{car.model} - {car.licensePlate}</p>
          </div>    
      </div>
    )

  }

}


export default DriverCard