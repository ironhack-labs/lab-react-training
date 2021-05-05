import React from "react";

const Rating = (props) => {

  return (
    // <div className="stars-container">
    //   <img href="/user-images.githubusercontent.com/5306791/52972787-39512c00-33bc-11e9-93d8-428d835442fd.png" alt="stars-img"/>
    // </div>
    <div>
      <h2>Rating: {Math.round(props.children)}</h2>
    </div>
  )
}

export default Rating;