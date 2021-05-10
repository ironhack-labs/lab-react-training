import React  from "react";

  const Rating = (props) => {

  return (
    <div>
      {/* {props.children === 0 && <img src="/public/img/stars-rating.png" />} */}
      <h2>Rating: {Math.round(props.children)}</h2>
      
    </div>
  )
}

export default Rating;