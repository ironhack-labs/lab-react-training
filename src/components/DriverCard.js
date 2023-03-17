import React from 'react'
import Rating from './Rating'

function DriverCard({ name, rating, img, car }) {

  const fontSize = { fontSize: 30 }

  const divStyle = {
    width: 1300,
    height: 250,
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 15,
    marginBottom: 50,
  }

  return (
    <div style={divStyle} className="d-flex  align-items-center justify-content-center">
      <img src={img} alt="img" width='180' height='180' className='rounded-circle' />
      <div className='mx-5 d-flex flex-column '>
        <p style={fontSize}><b>{name}</b></p>
        <p style={fontSize}><Rating children={rating} /></p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard