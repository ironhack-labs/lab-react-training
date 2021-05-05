import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function Rating(props) {
  var rating = props.children;
  console.log(rating);

  var stars = '';

  for (var i = 0; i < 5; i++) {
    if (Math.round(rating) > i) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }

  return <div>{stars}</div>;
}
