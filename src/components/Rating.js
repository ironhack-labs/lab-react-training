import React from 'react';
import '../App.css';

import Parser from 'html-react-parser';

function Rating(props) {
  let star1, star2, star3, star4, star5;
  star1 = star2 = star3 = star4 = star5 = Parser(`<span>&#9734;</span>`);

  if (props.children >= 0.5) {
    star1 = Parser(`<span>&#9733;</span>`);
  }

  if (props.children >= 1.5) {
    star2 = Parser(`<span>&#9733;</span>`);
  }

  if (props.children >= 2.5) {
    star3 = Parser(`<span>&#9733;</span>`);
  }

  if (props.children >= 3.5) {
    star4 = Parser(`<span>&#9733;</span>`);
  }

  if (props.children >= 4.5) {
    star5 = Parser(`<span>&#9733;</span>`);
  }

  return (
    <div>
      {star1}
      {star2}
      {star3}
      {star4}
      {star5}
    </div>
  );
}

export default Rating;

// White star
// <span>&#9734;</span>

// Black star
// <span>&#9733;</span>
