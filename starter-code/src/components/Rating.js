import React from 'react';

const Rating  = ({rating}) =>  { 

    let rt = Math.round(rating);
    let txt = '★'.repeat(rt) + '☆'.repeat(5-rt);

    return (
        <div >
            <p>{txt}</p>
        </div>
    )            
}

export default Rating;
