import React from 'react'
import { RatingStyle } from '../styles/styles'

const Rating = ({children}) => {
    let stars = Math.round(children)
    return (
        <RatingStyle>
            {stars === 0 ? (<p>☆☆☆☆☆</p>) : stars === 1 ? (<p>✭☆☆☆☆</p>) : stars === 2 ? (<p>✭✭☆☆☆</p>) : stars === 3 ? (<p>✭✭✭☆☆</p>) : stars === 4 ? (<p>✭✭✭✭☆</p>) : (<p>✭✭✭✭✭</p>)}
        </RatingStyle>
    )
}

export default Rating
