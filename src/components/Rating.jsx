import React from 'react';

const Rating = ({children}) => (
    <div className="rating">
        <p>{`${setRating(children)}`}</p>
    </div>
)

function setRating(rating) {
    switch (Math.round(parseFloat(rating))) {
        case 0:
            return "☆ ☆ ☆ ☆ ☆";
        case 1:
            return "★ ☆ ☆ ☆ ☆";
        case 2:
            return "★ ★ ☆ ☆ ☆";
        case 3:
            return "★ ★ ★ ☆ ☆";
        case 4:
            return "★ ★ ★ ★ ☆";
        case 5:
            return "★ ★ ★ ★ ★";
        default:
            return "Error, invalid rating";
    }
}

export default Rating;