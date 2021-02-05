import React from 'react';

function Rating(props) {

    const rating = Math.round(props.children);

    const stars = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★'
    }

    return (
        <div>
            <h2>{stars[rating]}</h2>
        </div>
    )
}
export default Rating;