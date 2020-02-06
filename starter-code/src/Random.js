import React from 'react'

const random = (max) => {
    return (
        Math.floor(Math.random() * max) + 1 
    )
}

const Random = ({ max, min }) => {
    return (
        <div className="card">
            <h4> {`Random value between ${max} and ${min} => ${random(max)}`} </h4>
        </div> 
    )   
}

export default Random