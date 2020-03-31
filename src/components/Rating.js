import React from 'react'

const Rating = (props) => {
    const rate = Math.round(props.children)
    const rating = ['☆','☆','☆','☆','☆']
    for(let i = 0; i < rate; i++){
        rating[i] = '★'
    }
    return (
        <div className = "starsCenter">
        <div  className = "rating">
            {rating.join('')}
        </div>
        </div>
    )
}

export default Rating
