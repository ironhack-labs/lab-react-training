import React from 'react'

const Random =props=> {
    
    let result = Math.floor(Math.random() *props.max)+props.min;

    return (
        <div>
            <h1 className="border-class">Random value between {props.min} and {props.max} = {result}</h1>
        </div>
    )
}

export default Random
