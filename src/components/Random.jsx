import React from 'react'

const Random = (props) => {
    return (
        <p className='random'>Random value between {props.min} and {props.max} =&#62; {Math.floor(Math.random() *(props.max-props.min)+props.min)}</p>
    )
}

export default Random
