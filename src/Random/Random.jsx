import React from 'react'
import './Random.css'

const Random = (props) => {
    const {min, max} = props
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <div className='random-number'>
            <p> Random value between {min} and {max} is {random}</p>
        </div>
    )
}

export default Random
