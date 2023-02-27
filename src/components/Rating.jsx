import React from 'react';


const Rating = ({ children }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(children)) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;