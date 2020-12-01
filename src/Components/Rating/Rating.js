import React from 'react';
import './Rating.css';

export default function Rating(props) {
  const rating = parseInt(props.children);
  console.log(rating);

  return (
    <div className="Rating">
      <div id={rating >= 1 ? 'star-five' : 'star-empty'}></div>
      <div id={rating >= 2 ? 'star-five' : 'star-empty'}></div>
      <div id={rating >= 3 ? 'star-five' : 'star-empty'}></div>
      <div id={rating >= 4 ? 'star-five' : 'star-empty'}></div>
      <div id={rating >= 5 ? 'star-five' : 'star-empty'}></div>
    </div>
  );
}
