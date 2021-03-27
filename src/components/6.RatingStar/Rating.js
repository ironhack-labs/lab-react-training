import React from 'react'
import './Rating.scss'

const Rating = ({ children }) => {
    const paintStars = (rate) => {
        if (5 <= rate && rate > 4.5) {
           return <img src='/images/starts/star5.png' alt='star5' />
        } else if (4.4 <= rate && rate > 3.5) {
            return <img src='/images/starts/star4.png' alt='star4' />
        } else if (3.4 <= rate && rate > 2.5) {
            return <img src='/images/starts/star3.png' alt='star3' />
        } else if (2.4 <= rate && rate > 1.5) {
            return <img src='/images/starts/star2.png' alt='star2' />
        } else if (1.4 <= rate && rate > 0.5) {
            return <img src='/images/starts/star1.png' alt='star1' />
        } else {
            return <img src='/images/starts/star0.png' alt='star0' />
        }
    }

    return (
        <div className="Rating">
            {paintStars(children)}
        </div>
    )
}

export default Rating
