import React, { Component } from 'react'


export default function Rating(props) {
    const roundedRating = Math.round(props.children)
    return (
        <div>
            {roundedRating === 0 && <span>&#9734; &#9734; &#9734; &#9734; &#9734;</span>}
            {roundedRating === 1 && <span>&#9733; &#9734; &#9734; &#9734; &#9734;</span>}
            {roundedRating === 2 && <span>&#9733; &#9733; &#9734; &#9734; &#9734;</span>}
            {roundedRating === 3 && <span>&#9733; &#9733; &#9733; &#9734; &#9734;</span>}
            {roundedRating === 4 && <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span>}
            {roundedRating === 5 && <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>}
        </div>
    )
}
