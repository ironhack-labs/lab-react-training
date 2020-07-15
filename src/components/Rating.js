import React from 'react';
import SolidStar from './SolidStar';
import BorderedStar from './BorderedStar';

const Rating = (props) => {
  const rate = Math.round(props.children);
  let starsArr = [];
  for (let i = 0; i < 5; i++) {
    rate < i + 1
      ? starsArr.push(<BorderedStar />)
      : starsArr.push(<SolidStar />);
  }
  return <div className="stars-row">{starsArr}</div>;
};

export default Rating;
