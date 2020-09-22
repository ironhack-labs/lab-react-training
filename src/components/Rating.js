import React from 'react';

function Rating(props) {
  const rateValue = Math.round(parseFloat(props.children));

  const emptyStar = '☆';
  const fullStar = '★';

  const rateElem = [];
  for(let cnt=0;cnt< rateValue; cnt++){
   rateElem.push(fullStar) 
  }
  for(let cnt=rateValue; cnt<=4; cnt++){
   rateElem.push(emptyStar) 
  }

  return (
    <p>
      {rateElem}
    </p>
  );
}

export default Rating;