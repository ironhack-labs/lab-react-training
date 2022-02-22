import React from 'react'

function Rating({children}) {
  let rating = Math.round(children);
  let stars = ''

  switch (rating) {
    case 0:
      stars = '☆☆☆☆☆';
      break;
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
    default:
    //no default
  }

  return (
  <p>
    {stars}
  </p>

  )
}

export default Rating
