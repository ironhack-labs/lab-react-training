import React from 'react';

const Rating = (props) => {
  const solidStar = <img src="./img/solidStar.svg" alt="Solid Star" />;
  const borderedStar = <img src="./img/borderedStar.svg" alt="Bordered Star" />;
  const rate = Math.round(props.children);
  let starsArr = [];
  while (props.children <= 5) {}
  for (let i = 0; i <= rate; i++) {
    if (rate < i) {
      starsArr.push(solidStar);
    } else {
      starsArr.push(borderedStar);
    }
  }
  console.log(starsArr);
  return (
    <div className="stars-row">
      <div className="star">{starsArr}</div>
    </div>
  );
};

export default Rating;
