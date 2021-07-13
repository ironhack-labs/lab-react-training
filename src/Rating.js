import React from 'react';

function Rating({children}) {
  let stars = "";
  let roundedNum = Math.round(children);

  switch (roundedNum) {
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
  }

  return stars;
}


export default Rating;