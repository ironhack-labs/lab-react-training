import React from 'react';

function Rating (props) {
    let stars 

    if (Math.round(props.children) === 0 ) {
        stars = '☆☆☆☆☆'
    } else if (Math.round(props.children) === 1) {
        stars = '★☆☆☆☆';
    } else if (Math.round(props.children) === 2) {
        stars = '★★☆☆☆';
    } else if (Math.round(props.children) === 3) {
        stars = '★★★☆☆';
    } else if (Math.round(props.children) === 4) {stars = '★★★★☆';
    } else {
        stars = '★★★★★';
    }
    
    return <div className='rating-container'>{stars}</div>;
}

export default Rating;