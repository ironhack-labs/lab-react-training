import React from 'react'

function DriverCard(props) {
    const {name, rating, img, car} = props
  return (
    <div>
      <div
        style={{
          paddingLeft: '150px',
          paddingRight: '150px',
          width: '300px',
          height: '100px',
          backgroundColor: 'blue',
          borderRadius: '12px',
          color: 'white',
          display: 'flex',
          fontSize: '17px',
          margin: '30px',
          justifyContent: 'space-around',
        }}
      >
        <img
          src={img}
          alt=""
          style={{ width: '80px', height: '80px', borderRadius: '60px', paddingTop: '10px' }}
        />
        <div style={{ display: 'flex'}}>
          <p>{name}</p>
          <p>{rating}</p>
          <p> {car.model}</p>
          <p> {car.licensePlate}</p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard