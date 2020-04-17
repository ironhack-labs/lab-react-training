import React from 'react';

const Rating = (props) => {
    const { children } = props;
    let stars;
    switch (true) {
        case (children < 0.9):
            stars = "☆☆☆☆☆";
            break;
        case (children >= 0.9 && children < 1.9):
            stars = "★☆☆☆☆";
            break;
        case (children >= 1.9 && children < 2.9):
            stars = "★★☆☆☆";
            break;
        case (children >= 2.9 && children < 3.9):
            stars = "★★★☆☆";
            break;
        case (children >= 3.9 && children < 4.9):
            stars = "★★★★☆";
            break;
        default:
            stars = "★★★★★";
            break;
    };
    return (
        <div class="Rating">{stars}</div>
    );
};
    
export default Rating;