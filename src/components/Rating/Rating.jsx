import React from 'react';

function Rating({children}){
    const roundNumber = Math.round(children);
    const stars = Array.from({ length: 5}, (_, index) => {
        if (index < roundNumber) {
            return '★'; 
          } else {
            return '☆';
          }
    });

    return (
    <div>{stars}</div>
  )
}
export default Rating