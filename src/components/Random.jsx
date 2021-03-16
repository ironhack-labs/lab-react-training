import React from 'react'

function Random(props) {
    let value=Math.floor(Math.random()*(props.max-props.min+1)+props.min)

    return (
        <div>
            random value between {props.min} and {props.max} => {value}
        </div>
    )
}

export default Random
