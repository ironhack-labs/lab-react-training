import React from "react"

const Random = (props) => {

    let number = Math.floor(Math.random() * props.max) + props.min

    return (
        <div className="random">
            <p>Random value between {props.min} and {props.max} => {number}</p>
        </div>
    )
}

export default Random