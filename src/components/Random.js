import React from 'react'

function Random({min, max}) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;

    return (
        <div className="iteration-container">
            <h5>{`Random value between ${min} and ${max} => ${randomNumber}`}</h5>
        </div>
    )
}

export default Random
