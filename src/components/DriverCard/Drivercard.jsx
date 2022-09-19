import React from 'react';
import Rating from '../Rating/Rating';
import './Drivercard.css';

const Drivercard = ({ newDriver }) => {
  return (
    <div className="drivercard-container">
      <img className="driver-img" src={newDriver.driver.img} alt="driver-img" />
      <div className="right-side-drivercard">
        <h2>{newDriver.driver.name}</h2>
        {/* <div>Rating</div> */}
        <Rating>{newDriver.children}</Rating>
        <p>
          {newDriver.driver.car.model} - {newDriver.driver.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default Drivercard;
