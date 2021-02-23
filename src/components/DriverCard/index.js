import React from 'react'
import Rating from '../Rating'


function DriverCard({name, rating, img, car}) {


  return (
    <div style={{display: 'flex', backgroundColor:'#455EB5', borderRadius: '20px'}}>
    <img src={img} alt="driver" width='200px' style={{borderRadius: '50%'}}/>
      <div>
        <h2>{name}</h2>
        <h3><Rating>{rating}</Rating></h3>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
     {/* */}
    </div>
  )
}

export default DriverCard
