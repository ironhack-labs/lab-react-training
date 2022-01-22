import React from 'react'

const Rating = ({children}) => {
    let stars = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];
    function getStars(children) {
        return stars[Math.round(children)]
    }
    return(
        <div className='Rating'>Rating: {getStars(children)}</div>
    )
}
export default Rating 