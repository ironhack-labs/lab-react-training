import React from 'react';

//rfce - new shortcut installed with ES7/React will create the component auto.

function Rating(props) {
  const { children } = props;
  const roundedRating = Math.round(children);
  const starsEmpty = '☆☆☆☆☆';
  const starsFull = '★★★★★';

  return (
    <h2>
      {starsFull.slice(0, roundedRating)}
      {starsEmpty.slice(0, 5 - roundedRating)}
    </h2>
  );
}

export default Rating;
