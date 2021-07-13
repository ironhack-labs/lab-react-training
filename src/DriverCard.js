import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-license">
      <div>
        <img className="Dimg" src={img} alt="portrait"></img>
      </div>
      <div className="Dinfo">
        <p>
          <strong>{name} </strong>{' '}
        </p>
        <Rating>{rating}</Rating>
        <p>
          {' '}
          {car.model} {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

DriverCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  img: PropTypes.string,
};
export default DriverCard;