import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  const photoStyle = {
    backgroundImage: `url("${props.img}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  return (
    <div class="driver-card">
      <div style={photoStyle} class="photo"></div>
      <div class="info">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <div class="car">
          <p>{props.car.model}</p>
          <p>props.car.licensePlate</p>
        </div>
      </div>
    </div>
  );
};

DriverCard.propTypes = {};

export default DriverCard;
