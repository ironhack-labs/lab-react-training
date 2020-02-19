import React from 'react'

const Random = (props) => {

    let random = Math.floor(Math.random() * props.min ) + props.max
    
    return (
        <div className="random">
            <p>Random value between {props.min} & {props.max} {random}</p>
        </div>
    )
}

export default Random