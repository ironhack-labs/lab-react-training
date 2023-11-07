import React from "react";

function Rating({children})
{
    const handleStars = (rating) => {
        const filledStars = '★'.repeat(Math.floor(rating));
        const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    
        return filledStars + emptyStars;
    };

    return(
        <h1>{handleStars(children)}</h1>
    )
}

export default Rating;