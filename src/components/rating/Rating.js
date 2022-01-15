import React from 'react';
import './Rating.css'

const Rating = (props) => {
  //props.children is the text inside the component-->1,49 in this case --> <Rating>1.49</Rating>
  //props.children; //string
  //console.log(typeof props.children) // string
  const numberStars = Math.round(props.children); // number
  //console.log(typeof numberStars); // number
  // Math.round(1.49) --> 1
  // Math.round(1.5) --> 2

  // up to 5 start, this will repeat the stars based on the props.children
  // numberStarts --> are the fulled starts 
  // if the numberStart is 5 --> 5★ + (5-5)--> '★★★★★'
  // if the numberStart is 4 --> '★★★★' +  (5-4)✩ --> ★★★★✩
  // if the numberStart is 2 --> '★★' +  (5-2)✩✩✩ --> ★★✩✩✩
  // string.repeat(number)
  const drawStars = '★'.repeat(numberStars) + '✩'.repeat(5-numberStars);
  //console.log(drawStars)

  return (
    <div className="rating-wrapper">
      <p>{drawStars}</p>
    </div>
  )
}

export default Rating;