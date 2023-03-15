import React from 'react'
import Rating from '../Rating/Rating'

function DriverCard({ name, rating, img, car }) {

  const divStyle = {
    width: 1400,
    height: 290,
    backgroundColor: '#7289da',
    marginBottom: 30,
    padding: 20,
    color: 'white',
    borderRadius: 10
  }

  const fontSize = { fontSize : 35 }

  return (
    <div style={divStyle} className="d-flex justify-content-center align-items-center">
      <img src={img} alt="profile-img" width='200' height='190' className='rounded-circle'/>
      <div className='mx-3 d-flex flex-column align-items-start'>
        <p style={fontSize}><b>{name}</b></p>
        <Rating children={rating}/>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard