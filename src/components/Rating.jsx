import React from 'react'

function Rating(props) {
    const { children } = props;

     
    const filledStars = Math.round(children);
  
  
    const stars = [];
  
    
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
  
   
    for (let i = filledStars; i < 5; i++) {
      stars.push(<span key={i}>☆</span>);
    }
  return (
    <div>{stars}</div>
  )
}

export default Rating