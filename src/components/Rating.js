import React from 'react'

const Rating = (props) => {
    let num = Math.round(props.children)
    let emptyStar =  "☆";
    let fullStar = "★";
    let stars = fullStar.repeat(num) + emptyStar.repeat(5 - num)

    return (
        <h1>{stars}</h1>
    )


}

export default Rating 