import React from 'react';

import './Rating.css';

function stars(rate){

    switch(rate){
        case 0:
            return "☆☆☆☆☆";
        case 1:
            return "★☆☆☆☆";
            case 2:
                return "★★☆☆☆";
                case 3:
                    return "★★★☆☆";
                    case 4:
                        return "★★★★☆";
                        case 5:
                        return "★★★★★";
    }
}

function Rating(props) {
    return(
        <div className="stars">
       {stars(Math.round(props.children))}
        </div>
    )
}

export default Rating;