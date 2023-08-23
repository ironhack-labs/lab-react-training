import React from 'react';
import PropTypes from 'prop-types';

const DriverCard = ({ name, rating, img, car }) => {
  const roundedRating = Math.round(rating)
  
    return (
    <div className="driver-card">
      <div className="driver-image">
        <img src={img} alt={`${name}'s profile`} />
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < roundedRating ? 'filled' : ''}>
              ★
            </span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

DriverCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  car: PropTypes.shape({
    model: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }).isRequired,
};

export default DriverCard;