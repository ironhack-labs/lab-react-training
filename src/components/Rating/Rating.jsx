import React from 'react'

const Rating = props => {
    const ratingStars = ['☆☆☆☆☆','★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★']
    const rating = Math.round(Number(props.children))
    return (
        <h1>{ratingStars[rating]}</h1>
    )
}

export default Rating
