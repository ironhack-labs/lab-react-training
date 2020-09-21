import React from 'react'

export const starLine = (rate) => {
    const floorNum = Math.round(rate)

    if (floorNum === 1) {
        return '★ ☆ ☆ ☆ ☆'
    } else if (floorNum === 2) {
        return '★ ★ ☆ ☆ ☆'
    } else if (floorNum === 3) {
        return '★ ★ ★ ☆ ☆'
    } else if (floorNum === 4) {
        return '★ ★ ★ ★ ☆'
    } else if (floorNum === 5) {
        return '★ ★ ★ ★ ★'
    } else {
        return '☆ ☆ ☆ ☆ ☆'
    }
}

const roundNum = (rate) => {
    return Math.round(rate)
}

const Rating = (props) => {
    return (
        <div className="rating-card col-12 col-sm-4">
            <span><strong>{roundNum(props.children)} </strong><small>/ 5</small></span>
            <p className="rating-card">{starLine(props.children)}</p>
        </div>
    )
}
export default Rating
