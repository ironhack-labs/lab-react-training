import React from 'react';

function Rating(props) {

  const displayRating = (numberOfStars) => {
    numberOfStars = parseFloat(numberOfStars);
    numberOfStars = Math.round(numberOfStars);

    return '★'.repeat(numberOfStars) + '☆'.repeat(5 - numberOfStars);
  };

    return (
      <>
        <p>{displayRating(props.children)}</p>
      </>
    );
}

export default Rating;
