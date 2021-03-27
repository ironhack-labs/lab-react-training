import React from 'react'
import './Random.scss'

const Random = ({min, max}) => {
    return (
        <div className="Random">
            <p style={{width: `${min}%`}}>{min}</p>
            <p style={{width: `${max}%`}}>{max}</p>
        </div>
    )
}

export default Random
