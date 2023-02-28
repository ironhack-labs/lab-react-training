import React from 'react'

function Rating(props) {
    const rating = Math.round(props.children);
    console.log(rating)
  return (
    <div>
        {rating === 0 && <p>☆☆☆☆☆</p>}
        {rating === 1 && <p>★☆☆☆☆</p>}
        {rating === 2 && <p>★★☆☆☆</p>}
        {rating === 3 && <p>★★★☆☆</p>}
        {rating === 4 && <p>★★★★☆</p>}
        {rating === 5 && <p>★★★★★</p>}
    </div>
    
  )
}

export default Rating