import React from 'react';

function Rating(props) {
  const roundedRating = Math.round(Number(props.children));

  return (
    <div className="rating">
      {[...Array(roundedRating)].map((el, i) => (
        <i key={i} className="fa fa-star" />
      ))}
      {[...Array(5 - roundedRating)].map((el, i) => (
        <i key={i} className="fa fa-star-o" />
      ))}
    </div>
  );
}

export default Rating;