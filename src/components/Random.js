import React from 'react';
import '../assets/css/Random.css'

const Random = ({ min, max }) => {
    const num = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className="Random">
            <p>Random value between {min} and {max} => {num}</p>
        </div>
    )
}

export default Random