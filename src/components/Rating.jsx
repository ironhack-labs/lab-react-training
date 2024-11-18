import React from "react";

function Rating(props) {
    const { children } = props

    function convertToStars(rating) {
        const roundedRating = Math.round(rating);
        const filledStars = '★'.repeat(roundedRating);
        const emptyStars = '☆'.repeat(5 - roundedRating);
        return filledStars + emptyStars;
    }

    return (
        <div>
            {convertToStars(children)}
        </div>
    )
}

export default Rating
