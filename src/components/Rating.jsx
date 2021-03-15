import React from 'react'
import "../styles/Rating.css"

const Rating = (props) => {

    
    let num = Math.round(props.children)

    let starOne = num < 1 ? "empty" : "";
    let starTwo = num < 2 ? "empty" : "";
    let starThree = num < 3 ? "empty" : "";
    let starFour = num < 4 ? "empty" : "";
    let starFive = num < 5 ? "empty" : "";

    console.log(starFour)

    return (
        <div className="star__box">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <span className={`fa fa-star ${starOne}`} ></span>
        <span className={`fa fa-star ${starTwo}`}></span>
        <span className={`fa fa-star ${starThree}`}></span>
        <span className={`fa fa-star ${starFour}`}></span>
        <span className={`fa fa-star ${starFive}`}></span>
            
        </div>
    )
}

export default Rating
