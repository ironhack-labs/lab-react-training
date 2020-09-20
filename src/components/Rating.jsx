import React from 'react';
import './Rating.css'

const Rating = (props) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < Math.round(props.children)) {
            stars.push( <i class="fa fa-star" aria-hidden="true"></i>)           
        } else {
            stars.push( <i class="fa fa-star-o" aria-hidden="true"></i>)           
        }
    }

    return <div className="Rating">
        {stars}
    </div>
}

export default Rating