import React from 'react'
import fullStar from "./../assets/fullStar.png";

function Rating(props) {
    let value=5-props.children
    return (
        <div>
           emptyStars {props.children}
           full stars {value}
           <img src={fullStar} alt="full star" />
        </div>
    )
}

export default Rating
