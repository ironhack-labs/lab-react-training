import React from 'react'
import './Rating.css'

const Rating = (props) => {
    const stars = Math.round(props.children);
    let rating = '';

    for (let i = 0; i < 5; i++) {
        if(i < stars) {
            rating += '★'
        } else {
            rating += '☆'
        }
    }

    return (
        <div className="rating">
            <p>{rating}</p>
        </div>
    )
}

export default Rating;
