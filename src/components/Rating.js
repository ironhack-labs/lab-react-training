import React from 'react'
import '../assets/css/Rating.css'

const Rating = ({children}) => {
    const starRating = () => {
        const rate = Math.round(Number(children))
        if (rate === 1) {
            return '★☆☆☆☆'
        } else if (rate === 2) {
            return '★★☆☆☆'
        } else if (rate === 3) {
            return '★★★☆☆'
        } else if (rate === 4) {
            return '★★★★☆'
        } else if (rate === 5) {
            return '★★★★★'
        }
    }

    return (
        <div className="Rating">
            <p>{ starRating() }</p>
        </div>
    )
}

export default Rating