import "./Rating.css"
import React from "react"

function Rating (props) {
    Math.ceil(props.children)
    let rating = "★".repeat(Math.ceil(props.children)) //"★☆"
    rating += "☆".repeat(5)
    rating = rating.slice(0,5)

    return (
        <div className="stars">
            {rating}
        </div>
    )
}

export default Rating

{/* <Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating> */}