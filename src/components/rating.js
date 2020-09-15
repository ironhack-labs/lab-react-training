import React from 'react'

export default function Rating({children}){
    let roundedChildren = Math.round(children)
    let stars
    switch (roundedChildren){
        case 0:
            stars = '☆☆☆☆☆'
            break;
        case 1:
            stars = '★☆☆☆☆'
            break;
        case 2:
            stars = '★★☆☆☆'
            break;
        case 3:
            stars = '★★★☆☆'
            break;
        case 4:
            stars = '★★★★☆'
            break;
        case 5:
            stars = '★★★★★'
            break;
        default:
            break;
    }
    return(
        <div className="rating">
            {stars}
        </div>
    )
}