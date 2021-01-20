import React from 'react';
import './Rating.css';

function Rating(props) {

    const ratings = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★'
    }

    for (const rating in ratings) {
        if(rating == Math.round(props.children)){
            return <div className="rating">{ratings[rating]}</div>
        }
    }
}

export {Rating};