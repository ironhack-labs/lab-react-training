import React from 'react';
import Rating from './Rating';

function DriverCard({name, rating, img, car}) {
  console.log();

  return (
    <div className="drivercard">
      <img style={{width: "80px",height: "80px",objectFit:"cover",borderRadius:"50" }} src={img} alt={name} />
    <div style={{color:"white"}}>
        <h2 style={{margin:"0px"}}>{name}</h2>
        <Rating>{rating}</Rating>
        <span>{car.model} - {car.licensePlate}</span>
    </div>
    </div>
  );
}

export default DriverCard;
