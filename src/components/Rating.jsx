import React from 'react';

function Rating(props) {
  let numberOfFieldStars = Math.floor(props.children);
  let filledStars = '★';
  let notfilledStars = '☆';

  filledStars = filledStars.repeat(numberOfFieldStars);

  // console.log(test);

  filledStars += notfilledStars.repeat(5 - numberOfFieldStars);

  return <div>{filledStars}</div>;
}

export default Rating;
