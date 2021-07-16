import React from 'react';
import './Rating.css'


function rateStars(num) {

  if(num === 0){
    return '☆☆☆☆☆';
  }
  if(num === 1){
    return '★☆☆☆☆';
  }
  if(num === 2){
    return '★★☆☆☆';
  }
  if(num === 3){
    return '★★★☆☆';
  }
  if(num === 4){
    return '★★★★☆';
  }
  if(num === 5){
    return '★★★★★';
  }
}

function Rating(props) {
  return(
    <div className="rating">{rateStars(Math.round(props.children))}</div>
  )
}

export default Rating;