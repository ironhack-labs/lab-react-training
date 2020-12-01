import React from 'react'

export default function Rating(props) {
    function starRating(rating) {
        switch(rating) {
            case 0:
                return '☆☆☆☆☆'
            break;
            case 1:
                return '★☆☆☆☆'
            break;
            case 2:
                return '★★☆☆☆'
            break;
            case 3:
                return '★★★☆☆'
            break;
            case 4:
                return '★★★★☆'
            break;
            case 5:
                return '★★★★★'
            break;
        }
    }
    return (
         <div className="stars">
            {starRating(Math.round(props.children))}
        </div>
    )
}
