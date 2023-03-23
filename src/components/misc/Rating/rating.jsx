import React from 'react';

function Rating({ children }) {
  const rating = Math.round(children); 
  
  const completeStars = '★'.repeat(rating); 
  const onlyStars = '☆'.repeat(5 - rating); 
  
  return (
    <div className='Rating'>
      <div>
        {completeStars}
        {onlyStars}
      </div>

    </div>
    
  );
}

export default Rating;

