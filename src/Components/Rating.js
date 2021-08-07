import React from 'react'

const Rating = (props) => {
    
    const number = Math.round(props.children)
    const star = '★'
    const noStar = '☆'
    return(
        <div>
        {star.repeat(number) + noStar.repeat(5-number)}
        </div>
    )
}

export default Rating