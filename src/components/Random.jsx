import React from 'react'

function Random({ min, max }) {
    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
        <div> <h1>Random value between {min} and {max} is : {generateRandom(min, max)}</h1></div>
    )
}

export default Random