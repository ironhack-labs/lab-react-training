import React from 'react'

function Rating({ children }) {
    let ratingStars = "★".repeat(Math.floor(children)) + "☆".repeat(Math.ceil(5 - children));
    return (
        <div>
           <h4>{ratingStars}</h4> 
        </div>
    )
}

export default Rating
