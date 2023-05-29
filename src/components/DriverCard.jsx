import React from 'react'
import Rating from './Rating'

function DriverCard(drivercard) {
  return (
    <div className='driverdiv'>
        
        <div className='imgcrop'>
            <img className='driverimg' alt="driver" src={drivercard.img}/>
        </div>
        <div className='driveinfo'>
            <h3>{drivercard.name}</h3>
            <Rating>{drivercard.rating}</Rating>
            <p>{drivercard.car.model} - {drivercard.car.licensePlate}</p>
        </div>
    

    </div>
  )
}

export default DriverCard
