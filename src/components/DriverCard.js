import React from 'react'
import starRating from '../star-rating.json'

 function DriverCard(props) {
  return (
    <div>
        <p>name: {props.name} </p>










<p>        {props.rating == 0 &&  <p>{starRating[0].ZeroStars}</p>}</p>
<p>{(props.rating >= 1 && props.rating < 1.5) && <p>Rating {starRating[0].OneStars}</p>}</p>
<p>{(props.rating > 1.5 && props.rating < 2.5) && <p>Rating {starRating[0].TwoStars}</p>}</p>
<p>{(props.rating >= 2.5 && props.rating < 3.5) && <p>Rating {starRating[0].ThreeStars}</p>}</p>
<p>{(props.rating >= 3.5 && props.rating < 4.5) && <p>Rating {starRating[0].FourStars}</p>}</p>
<p> {(props.rating >= 4.5 && props.rating <= 5) && <p>Rating {starRating[0].FiveStars}</p>}</p>



        {/* <p>rating: {props.rating} </p> */}
        <img src={props.img} alt="" /> 
        <p><strong>model</strong> {props.car.model} <strong>plate</strong> {props.car.liscensePlate}</p>
        
    </div>
  )
}

export default DriverCard
