import React from 'react';
import Rating from './Rating';
import './Drivercard.css';

const DriverCard = ({ newDriver }) => {
  return (
    <div className="driverCard">
      <img className="driver-image" src={newDriver.driver.img} alt="driver" />
      <div className="rightSide-driverCard">
        <h2>{newDriver.driver.name}</h2>
        <Rating>{newDriver.children}</Rating>
        <p>
          {newDriver.driver.car.model} - {newDriver.driver.car.licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
