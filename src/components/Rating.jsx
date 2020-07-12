import React from 'react'
import getRatingStars from '../tools/getRatingStars'

const Rating = (props) => {
    return (
        <div>
            {getRatingStars(props.children)}
        </div>
    )
}

export default Rating
