
import React from "react"
import './Rating.css'

const Rating = (props) => {

 let stars = Math.ceil(Number(props.rating))

 let starsRating = ""

 switch(stars){
    
    case 0 :
        starsRating = "☆☆☆☆☆"
    break;
    case 1 :
        starsRating = "★☆☆☆☆"
    break;
    case 2 :
        starsRating = "★★☆☆☆"
    break;
    case 3 :
        starsRating = "★★★☆☆"
    break;
    case 4 :
        starsRating = "★★★★☆"
    break;
    case 5 :
        starsRating = "★★★★★"
    break;
    
 }


    return(
        <div>
            <p className="stars"> {starsRating}</p>   
        </div>
    )

}

export default Rating