import React from 'react'

const Random = (props) => {
    let style={
        border : "1px solid black",
        margin: 5, 
        padding : 5
    }
    let randomValue= Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    return (
        <div style={style}>
            Random value between {props.min} and {props.max} = {randomValue}
        </div>
    )
}

export default Random
