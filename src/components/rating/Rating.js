import React from 'react';
import style from './Rating.module.css';

function showRatingStarts(rating) {
    rating = Math.round(parseFloat(rating));

    switch (rating) {
        case 0:
            return "☆☆☆☆☆";
        case 1:
            return "★☆☆☆☆";
        case 2:
            return "★★☆☆☆";
        case 3:
            return "★★★☆☆";
        case 4:
            return "★★★★☆";
        case 5:
            return "★★★★★";
        default:
            return "☆☆☆☆☆";
    }
}

function Rating(props) {
    return (
        <span className={style.rating}>{showRatingStarts(props.children)}</span>
    )
}

export default Rating;