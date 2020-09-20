import React from 'react'

function randomNum(min, max) {
return Math.floor(Math.random() * (max - min + 1))
}

const Random = (props) => {
    return (
       <div className="greeting col-12 col-sm-6">Random value between {props.min} and {props.max} =>  <strong>{randomNum(props.min, props.max)}</strong></div>
    )
}
export default Random