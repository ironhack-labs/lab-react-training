import React from 'react';

function Rating (props){
    const rate = Math.round(props.children);
    let full = '★'.repeat(rate);
    let empty = '☆'.repeat(5 - rate);

    return (
        <div>{full.concat(empty)}</div>
    )
}

export default Rating;