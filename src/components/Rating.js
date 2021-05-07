import React from 'react';

const Rating = (props) =>{

    const stars = (rating) => {
        let result = '';
        for (let i = 1; i <= 5; i++) {
            if (i >= 1 && i <= Math.round(rating)) {
                result += '★'
            } else {
                result += '☆'
            }
        }
        return result;
    }
    return(
        <div>
         <p>{stars(props.children)}</p>
        </div>
    )
}

export default Rating;