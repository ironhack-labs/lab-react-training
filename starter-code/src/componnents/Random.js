import React from 'react'

function Random(props) {

    let midValue = props.min + Math.floor(Math.random()*props.max-props.min+1)
    return (
        <div><p>{midValue}</p></div>
    )
}
export default Random

