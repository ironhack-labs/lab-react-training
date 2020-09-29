import React from 'react';
import './rating.css';

function Rating (props) {
    let star=""
    for (let i=0; i < 5; i++) {
            if (Math.round(props.children) > i) {
                star += 'â˜…'
            }
            else {
                star += 'â˜†'
            }
        }
        return ( 
    <div className="star-rating">{star}</div>
    )
}

export default Rating