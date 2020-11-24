
import React from 'react'

const Rating = (props) => {
    let roundedRating = Math.round(props.children)
    // let emptyStars = 5 - roundedRating 
    let stars
    switch (roundedRating) {
        case 0:
            stars = "☆☆☆☆☆"
            break
        case 1:
            stars = '★☆☆☆☆'
            break
        case 2:
            stars = '★★☆☆☆'
            break
        case 3:
            stars = '★★★☆☆'
            break
        case 4:
            stars = '★★★★☆'
            break
        case 5:
            stars = '★★★★★'
            break
        default:
            break
    }
    return <h2>{stars}</h2>
    
}

export default Rating