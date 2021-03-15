import React from 'react';

const Rating = (props) => {
  let stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((star) => {
        return star <= Math.round(props.children) ? '★' : '☆';
      })}
    </div>
  );
};

export default Rating;
