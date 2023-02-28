import React from 'react'

function Rating(props) {
    const {rating} = props
    if (rating === 5){
        return <div className="ratingAlign"><h1>★ ★ ★ ★ ★</h1></div>
    } else if (rating < 4.5 && rating >= 3.5){
        return <div className="ratingAlign"><h1>★ ★ ★ ★ ☆</h1></div>
    } else if (rating < 3.5 && rating >= 2.5){
        return <div className="ratingAlign"><h1>★ ★ ★ ☆ ☆</h1></div>
    } else if(rating < 2.5 && rating >= 1.5){
        return <div className="ratingAlign"><h1>★ ★ ☆ ☆ ☆</h1></div>
    } else if(rating < 1.5 && rating >= 0.5){
        return <div className="ratingAlign"><h1>★ ☆ ☆ ☆ ☆</h1></div>
    } else if(rating < 0.5 && rating >= 0){
        return <div className="ratingAlign"><h1>☆ ☆ ☆ ☆ ☆</h1></div>
    }
}

export default Rating