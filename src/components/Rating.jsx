import React from 'react'
import './Rating.css'



function Rating(props) {
    const roundedRate = Math.round(props.children)

    let rateStars = ''

    for(let i = 0; i < 5; i++) {
        if (i < roundedRate) {
            rateStars += '★'
        } else {
            rateStars += '☆'
        }
    }
    return (
        <div className='container-rating'>
            <div>{rateStars}</div>
        </div>
    )
}

export default Rating