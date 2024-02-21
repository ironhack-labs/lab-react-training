import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Rating({children}) {

  let rating = " ";

  if (children <= 0.49){
    rating = "☆☆☆☆☆"
  } 
  else if (children <= 1.49){
    rating = "★☆☆☆☆"
  }
  else if (children <= 2.49){
    rating = "★★☆☆☆"
  }
  else if (children <= 3.49){
    rating = "★★★☆☆"
  } 
  else if (children <= 4.49){
    rating = "★★★★☆"
  }
  else{
    rating = "★★★★★"
  }

  return (
    <div className="rating">
        <p>{rating}</p>
    </div>
  )
}
