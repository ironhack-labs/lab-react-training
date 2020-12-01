import React from 'react';

const Rating = ({ children }) => {
  let round = Math.round(children);
  
  let starsNum = () => {
    let stars = '';

    switch (round) {
      case 0:
        return (stars = '☆☆☆☆☆');
      case 1:
        return (stars = '★☆☆☆☆');
      case 2:
        return (stars = '★★☆☆☆');
      case 3:
        return (stars = '★★★☆☆');
      case 4:
        return (stars = '★★★★☆');
      case 5:
        return (stars = '★★★★★');
    }
  };

  return <p>{starsNum()}</p>;
};

export default Rating;
