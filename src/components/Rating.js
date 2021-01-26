import React from 'react';

const Rating = props => {
    const rating = Math.round(props.children);

    const stars = {
       0: '☆☆☆☆☆',
       1: '★☆☆☆☆',
       2: '★★☆☆☆',
       3: '★★★☆☆',
       4: '★★★★☆',
       5: '★★★★★'
     }

    return(
        <div>{stars[rating]}</div>
    )
}

export default Rating;