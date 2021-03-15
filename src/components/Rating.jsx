import React from 'react'

const getStars = props => {
    return '★'.repeat(Math.round(props.children))+'☆'.repeat(5-Math.round(props.children))
}

const Rating = (props) => {
    return (
        <div>
            {getStars(props)}
        </div>
    )
}

export default Rating
