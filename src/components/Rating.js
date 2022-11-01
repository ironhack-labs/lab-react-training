import React from 'react'
import starRating from '../star-rating.json'

function Rating(props) {
  return (
    <div>
        
        {props.children == 0 &&  starRating[0].ZeroStars}

        {(props.children >= 1 && props.children < 1.5) && starRating[0].OneStars}
    
        {(props.children > 1.5 && props.children < 2.5) && starRating[0].TwoStars}

        {(props.children >= 2.5 && props.children < 3.5) && starRating[0].ThreeStars}

        {(props.children >= 3.5 && props.children < 4.5) && starRating[0].FourStars}

        {(props.children >= 4.5 && props.children <= 5) && starRating[0].FiveStars}

        <br/>
        {props.children}

    </div>
  )
}

export default Rating;