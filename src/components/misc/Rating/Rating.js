import React from 'react';

const Rating = (props) => {

    let number = Math.round(props.children)
    let stars = '★'.repeat(number) + '☆'.repeat( 5 - number );

    return (
        <div>
            <div>{stars}</div>
        </div>
    );
};

export default Rating;