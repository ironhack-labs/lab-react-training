import React, { children } from 'react';

function Rating({children}) {
    const stars = Math.round(children);
    const emptyStars = 5 - stars;
    return (
        <div className="rank">
            {'★'.repeat(stars) + '☆'.repeat(emptyStars)}
        </div>
    )

};

export default Rating;

