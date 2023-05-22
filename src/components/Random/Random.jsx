import React from 'react'

const Random = ({ min, max }) => {
    let number = parseInt(Math.random() * (max - min + 1) + min);
    let result = `Random value between ${min} and ${max} => ${number}`
    return (
        <div className='random'>{result}</div>
    )
}

export default Random