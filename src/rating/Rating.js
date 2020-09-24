import React from 'react'

export default function Rating(props) {
    let darkStars = Math.round(props.children)
    let starsToDisplay = ''
    switch(darkStars){
        case 0:
            starsToDisplay = '☆☆☆☆☆'
            break;
        case 1:
            starsToDisplay = '★☆☆☆☆'
            break;
        case 2:
            starsToDisplay = '★★☆☆☆'
            break;
        case 3:
            starsToDisplay = '★★★☆☆'
            break;
        case 4:
            starsToDisplay = '★★★★☆'
            break;
        case 5:
            starsToDisplay = '★★★★★'
            break;
        default:
            return 'no rating'
    }   
    return (
        <div className="stars-box">
            {starsToDisplay}
        </div>
    )
}
