import React from 'react'

function Rating(props) {
    const {rating} = props;
    const ratingFunction = (rating) => {
        return Math.round(rating);
        
    }

    
  return (
    <div>
       {ratingFunction(rating) === 5 && <p>★★★★★</p>} 
       {ratingFunction(rating) === 4 && <p>★★★★☆</p>} 
       {ratingFunction(rating) === 3 && <p>★★★☆☆</p>} 
       {ratingFunction(rating) === 2 && <p>★★☆☆☆</p>} 
       {ratingFunction(rating) === 1 && <p>★☆☆☆☆</p>} 
       {ratingFunction(rating) === 0 && <p>☆☆☆☆☆</p>} 
        
    </div>
  )
}

export default Rating