import React from 'react'

function Rating({ children }) {

    let score = Math.round(children);
    let filledStars = '★'.repeat(score);
    let emptyStars = '☆'.repeat(5 - score);
    return <div className="ratings">{filledStars.concat(emptyStars)}</div>;
}

export default Rating;
