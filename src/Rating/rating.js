import React from 'react';
import './rating.css';

function Rating (props) {
    let star=""
    for (let i=0; i < 5; i++) {
            if (Math.round(props.children) > i) {
                star += '★'
            }
            else {
                star += '☆'
            }
        }
        return ( 
    <div className="star-rating">{star}</div>
    )
}

export default Rating