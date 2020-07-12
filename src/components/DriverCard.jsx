import React from 'react'
import Rating from './Rating'

export default function DriverCard({imgUrl, name, driverRating, model, licensePlate}) {
    return (
      <div className="driver-card">
      <div>
      <img src={imgUrl} alt="" />
      </div>
          
        <div className="driver-data">
          <h4>{name}</h4>
          <Rating value={driverRating} />
          <p>{model} - {licensePlate}</p>
        </div>
      </div>
    );
}