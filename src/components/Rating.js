import React from 'react';
import './Rating.css';

const Rating = (props) => {
    let stars = ['☆', '☆', '☆', '☆', '☆'];
    const score = Math.round(props.children);

    for (let i = 0; i < score; i++) {
        stars[i] = "★";
    };

    return (
        <div className="Rating">
            {stars.join('')}
        </div>
    );
};

export default Rating;