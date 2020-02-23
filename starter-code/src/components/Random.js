import React from 'react'

function Random({max, min}) {
    const numRandom = Math.floor(Math.random() * (max-min) - min )
    return (
        <div>
            <p>Random value between {min} and {max} => {numRandom}</p>
        </div>
    )
}

export default Random
