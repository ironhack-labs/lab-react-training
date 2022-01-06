import React from 'react';
import './Rating.css'

const Rating = (props) => {
  // props.children is the text inside the component-->1,49 in this case --> <Rating>1.49</Rating>
  //props.children; //string
  // with Math round --> 1,49 --> 1, and 1.5 will be 2.
  //Alt + 9733
  // 	Alt + 9734 - light
  const numberStars = Math.round(props.children); //string

  // up to 5 start, this will repeat the stars based on the props.children
  const drawStars = '★'.repeat(numberStars) + '☆'.repeat(5-numberStars)

  return (
    <div className="rating-wrapper">
      <p>{drawStars}</p>
    </div>
  )
}

export default Rating;