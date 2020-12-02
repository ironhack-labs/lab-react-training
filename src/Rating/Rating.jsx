import React from 'react'
import './Rating.css'

const Rating = (props) => {
    const numberOfStars = Math.round(props.children)
    return (
        <div className='stars'>
        { numberOfStars === 0 && <span> ☆☆☆☆☆ </span> }
        { numberOfStars === 1 && <span> ★☆☆☆☆ </span> }
        { numberOfStars === 2 && <span> ★★☆☆☆ </span> }
        { numberOfStars === 3 && <span> ★★★☆☆ </span> }
        { numberOfStars === 4 && <span> ★★★★☆ </span> }
        { numberOfStars === 5 && <span> ★★★★★ </span> }  
        </div>
    )
}

export default Rating
