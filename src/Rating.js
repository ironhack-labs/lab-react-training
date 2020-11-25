import React from 'react'

const Rating = ({children}) => {
    let stars = []
    let emptyStars = ['☆','☆','☆','☆','☆']
    for (let i = 0; i<Math.round(children); i++) {
        stars.push("★")
        emptyStars.pop('☆')
    }
    return (
        <div>
            {stars}{emptyStars}
        </div>
    )
}

export default Rating
