import React from 'react'

export default function DriverCar(props) {
  return (
    <div className='fondo'>
            <div>
                <img src={props.img} className="imagen" alt="profile" />
            </div>
            <div>
                <p>{props.name}</p>
                <p>{props.rating}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>

    </div>
  )
}


