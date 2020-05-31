import React from 'react';
import './Rating.css';

function Rating(props) {
    const ratingNumber = Math.round(Number(props.children));
    let stars = '';
    for (let i = 0; i < 5; i ++) {
        if (i < ratingNumber) {
            stars = stars + '★';
        } else {
            stars = stars + '☆';
        }
    }

    return(
        <div className="stars">
            {stars}
        </div>
    );
}

export default Rating;