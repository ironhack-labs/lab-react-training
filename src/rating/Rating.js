import React from 'react';



const Rating = (props) => {

    let emptyStar = "☆"
    let fullStar = "★"
    
    let ratingStars = "☆☆☆☆☆"
      if (props.children >= 1) {
        ratingStars = "★☆☆☆☆"
      } 
      if (props.children >= 2) {
        ratingStars = "★★☆☆☆"
      } 
      if (props.children >= 3) {
        ratingStars = "★★★☆☆"
      } 
      if (props.children >= 4) {
        ratingStars = "★★★★☆"
      } 
      if (props.children >= 5) {
        ratingStars = "★★★★★"
      } 
        
    

  return (
  <div>
    {ratingStars}
  </div>);

};

export default Rating;