import React from 'react';

const Rating = ({ children }) => {
  const roundNumber = Number(Math.round(children));

  const emptyStarPath = '/assets/images/star.svg';
  const filledStarPath = './assets/images/star-filled.svg';

  return (
    
    <div>
        {roundNumber >= 1 ? <img src={filledStarPath} alt="emptyStar" /> : <img src={emptyStarPath} alt="emptyStar" />}
        {roundNumber >= 2 ? <img src={filledStarPath} alt="emptyStar" /> : <img src={emptyStarPath} alt="emptyStar" />}
        {roundNumber >= 3 ? <img src={filledStarPath} alt="emptyStar" /> : <img src={emptyStarPath} alt="emptyStar" />}
        {roundNumber >= 4 ? <img src={filledStarPath} alt="emptyStar" /> : <img src={emptyStarPath} alt="emptyStar" />}
        {roundNumber >= 5 ? <img src={filledStarPath} alt="emptyStar" /> : <img src={emptyStarPath} alt="emptyStar" />}
         {roundNumber}
    </div>
     
  );
};

export default Rating;
