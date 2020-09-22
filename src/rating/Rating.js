import React from 'react';
import './Rating.css';

const Rating = (props) => {
  let rate = props.children;

  return (
    <div className="rating">
      {rate <= 0.5 ? '☆' : '★'}
      {rate <= 1.5 ? '☆' : '★'}
      {rate <= 2.5 ? '☆' : '★'}
      {rate <= 2.5 ? '☆' : '★'}
      {rate <= 4 ? '☆' : '★'}
    </div>
  );
};
export default Rating;