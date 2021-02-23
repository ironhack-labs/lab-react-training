import React, { Children }from 'react'
import './Rating.css'

const Star = (props) => {
        return <div className={`rating ${props.className}`}>★</div>
}

export default function Rating(props) {
    let { total, rating } = props
    const starNodes = []
    for (let i = 0; i < total; i++) {
        let active
        if (i - rating < 0) {
            active = 'isActive'
        } else {
            active = ''
        }
        starNodes.push(
            <Star key={i} className={active} />
        )
    } 
        return (
            <div className='star'>
              {starNodes}
            </div> 
        )
}
