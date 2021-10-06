//☆★
import React from 'react'

function Rating(props) {
    const { children } = props
    let amount = Math.round(children)
    let emptyStars = "☆".repeat([5 - amount])
    let fullStars = "★".repeat([amount])
    //smashmouth ;D (Shrek) jajaja
    let allStars = emptyStars + fullStars
    return (
        <div className="Rating">
            {allStars}
        </div>
    )
}

export default Rating
