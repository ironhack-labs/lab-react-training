import React from 'react'

const Random = (props) => {
    const ranNum =  Math.floor(Math.random() * (props.max) + (props.min));
    return (
    <div className='card'>
        <p>Random value between {props.min} and {props.max} => {ranNum}</p>
    </div>
  )
}

export default Random
