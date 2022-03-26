import React from 'react';

const Rating = (props) => {

    const numberOfStars = Math.round(props.children)
    const stars = '★'.repeat(numberOfStars) + '☆'.repeat( 5 - numberOfStars );

    return (
            <div>{stars}</div>
    );
};

export default Rating;