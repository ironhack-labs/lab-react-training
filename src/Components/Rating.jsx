import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ children }) => {
  const filledStars = Math.floor(children);
  const hasHalfStar = children - filledStars >= 0.5;

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>
          {index <= filledStars ? '★' : hasHalfStar && index === filledStars + 1 ? '½' : '☆'}
        </span>
      ))}
    </div>
  );
};

/* Rating.propTypes = {
  children: PropTypes.number.isRequired,
}; */

export default Rating;