import React from 'react'

function DriverCard(props) {
    const {name,rating,img, car} = props

    const divStyle = {
    height:200,
    width:200,
    }

  return (
    <div className='drivercard'>

    <img className="circle-image"src={img} alt={name} style={divStyle}/>
    <p>{name}</p>
    <p>{rating}</p>
    <p>{car.model} - {car.licensePlate}</p>

    </div>
  )
}

export default DriverCard