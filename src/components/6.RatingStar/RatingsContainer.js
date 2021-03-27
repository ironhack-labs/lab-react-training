import React from 'react'
import Rating from './Rating'
import './RatingContainer.scss'

const RatingsContainer = () => {
    const rates = [ 0, 1.49, 1.5, 3, 4, 5]

    return (
        <div className="RatingsContainer">
        {
            rates.map((rate) => {
                return <Rating key={rate}>{rate}</Rating>
            })
        }
        </div>
    )
}

export default RatingsContainer
