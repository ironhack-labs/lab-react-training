import React from 'react'

function DriverCard(props) {
  return (
    <div>
    <div className='con'>
        <p className='nom'><strong>{props.name}</strong></p>
        <p className='rat'>{props.rating}</p>
        <p>{props.car.model}</p>
        <div className='conductores'>
        <img src={props.img}/>
        </div>
        </div>
    </div>
  )
}

export default DriverCard