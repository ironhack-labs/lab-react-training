import React from 'react'

const Random = (props) => {
    const { min, max } = props

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;  
    }

    return (
        <div className='border p-3 bold mb-3'>
            Random Value Between {min} and {max} => {getRandomInt(min, max)}
        </div>
    )
}

export default Random
