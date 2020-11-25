import React from 'react'
import "../components/cssComponents/Rating.css";

function Rating(props) {
    const starRating=Math.round(props.children)
    const noOfStars = (nStars) => {
        return {
            0 : '☆☆☆☆☆',
            1 : '★☆☆☆☆',
            2 : '★★☆☆☆',
            3 : '★★★☆☆',
            4 : '★★★★☆',
            5 : '★★★★★',
        }[nStars]
    }
    return (
        <div className="stars">
            {noOfStars(starRating)}
        </div>
    )
}

export default Rating
