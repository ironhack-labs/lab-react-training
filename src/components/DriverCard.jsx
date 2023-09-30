import React from 'react'

function DriverCard(props) {
    const {name, rating, img, car} = props;

  return (
    <div
    style={{
        backgroundColor: '#4550a7',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
    }}
    >
        <img
        src={img}
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginRight: '20px',
        }}

        ></img>
        <div>
        <h2>{name}</h2>
        <p>
          {rating.toFixed(1)} Stars
        </p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
        </div>
  )
}

export default DriverCard