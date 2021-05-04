import React from 'react';

const Rating = ({ children }) => {
  const getStars = () => {
    const rate = Math.round(Number(children));
    console.log(rate);
    switch (rate) {
      case 1:
        return '★☆☆☆☆';
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return '☆☆☆☆☆';
    }
  };
  return <div className="Rating">{getStars()}</div>;
};

export default Rating;
