import React from 'react';

function DriverCard(props) {
    return (
      <div className='driver-card-container'>
        <div className='driver-card-image'>
          <img src={props.img} alt="driver" />
        </div>
        <div className='driver-card-details'>
            <h4>{props.name}</h4>
            <h5>Rating: {props.rating.toString()}</h5>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
      </div>
    );
}

export default DriverCard;