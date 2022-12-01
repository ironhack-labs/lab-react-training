import React from 'react'

const Random = props => {
    const { min, max } = props

    let result = Math.floor(Math.random() * (max - min) + min)

    return (
        <article className="random">
            <h4>Random value between {min} and {max} => {result}</h4>
        </article>
    )
}

export default Random