import React from 'react'

export default function Rating(props) {
    let emptyStar = '☆';
    let star = '★'
    const rand = Math.round(props.children)

    return (
        <div>
            {star.repeat(rand)}{emptyStar.repeat(5-rand)}
        </div>
    )
}
