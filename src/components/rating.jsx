import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);


  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>
          {index <= filledStars ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Rating;