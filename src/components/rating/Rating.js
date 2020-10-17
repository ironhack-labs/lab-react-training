import React from 'react'

export default function Rating(props) {
    console.log(props)
    const stars = Math.round(props.children)
    const countStars = (stars) => {
        if (stars === 0) {
            return '☆☆☆☆☆'
        } else if(stars === 1) {
            return '★☆☆☆☆'
        } else if(stars === 2) {
            return '★★☆☆☆'
        } else if(stars === 3) {
            return '★★★☆☆'
        } else if(stars === 4) {
            return '★★★★☆'
        } else if(stars === 5) {
            return '★★★★★'
        }
    }
    return (
        <div>
            <p>{countStars(stars)}</p>
        </div>
    )
}
