import React from 'react';

function Rating(props) {
  const roundedRating = Math.round(Number(props.children));

  return (
    <div className='rating'>
      {[...Array(roundedRating)].map((el, i) => '★')}
      {[...Array(5 - roundedRating)].map((el, i) => '☆')}
    </div>
  )
}

//'★' : '☆'


export default Rating;