import React from 'react';

const Rating = (props) => {
  let rate = props.children;

  return (
    <div className="box">
      {rate <= 0.5 ? '☆' : '★'}
      {rate <= 1.5 ? '☆' : '★'}
      {rate <= 2.5 ? '☆' : '★'}
      {rate <= 2.5 ? '☆' : '★'}
      {rate <= 4 ? '☆' : '★'}
    </div>
  );
};

export default Rating;