import React from 'react';

function Rating(props) {
  const filledStar = '★';
  const emptyStar = '☆';
  const rating = Number(props.children);
  console.log('rating=', rating, typeof rating);

  return (
    <div className="rating">
      {filledStar.repeat(Math.round(rating))}
      {emptyStar.repeat(5 - Math.round(rating))}
    </div>
  );
}

export default Rating;
