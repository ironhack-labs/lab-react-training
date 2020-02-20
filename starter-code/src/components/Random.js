import React from 'react'

const Random = props => {
    const random = Math.floor(Math.random() * props.max) + props.min
    return(
        <div style={styleRandom}>
            <p style={parrafo}>Random value between {props.min} and {props.max} => {random}</p>
        </div>
    )
}

const styleRandom = {
    border: '2px solid black',
    margin: '10px',
}

const parrafo = {
    marginLeft: '10px'
}

export default Random