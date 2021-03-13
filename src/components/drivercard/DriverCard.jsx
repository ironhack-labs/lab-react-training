import React from 'react';
import P from 'prop-types';
import Rating from '../rating/Rating';


const DriverCard =({name,rating,img,car})=>{

  return(
    <div className="driver-card-container" style={{display: 'flex', justifyContent:'center'}}>
      <div>
        <img src={img} alt="foto motorista" style={{width:'100px'}}/>
      </div>
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <h3>{car.model} - {car.licensePlate}</h3>
      </div>
    </div>
  )
}

export default DriverCard;