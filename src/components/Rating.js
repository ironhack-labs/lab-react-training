import React from 'react';

const Rating = (props) => {
  const solidStar = <img src="./img/solidStar.svg" alt="Solid Star" />;
  const borderedStar = <img src="./img/borderedStar.svg" alt="Bordered Star" />;
  const rate = Math.round(props.children);
  let starsArr = [];
  for (let i = 0; i < 5; i++) {
    rate < i + 1 ? starsArr.push(borderedStar) : starsArr.push(solidStar);
  }
  return <div className="stars-row">{starsArr}</div>;
};

export default Rating;
