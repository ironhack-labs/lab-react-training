import React from 'react';

const Rating = (props) => {
    let rating = Math.round(props.children);
    let result = '';

    for (let i=0; i<5; i++){
        result += (rating <= i ? '☆' : '★')
    }
    
    return (
        <div >
            {result}
        </div>
    )
}

export default Rating;
