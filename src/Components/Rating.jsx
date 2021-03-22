import React from 'react';
import "./../styles/Rating.css";


let maxRate = 5;

const Rating = ({children}) => {

let rate = Math.round(Number(children));
let stars = [];

for (let i = 0; i < maxRate; i++) {
    if (i < rate) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }

  return <div>{stars}</div>;
}

export default Rating
