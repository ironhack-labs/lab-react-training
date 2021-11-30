import React from 'react';
import './Random.css';


const Random = (props) => {
  const { min, max } = props
  const value = Math.floor((Math.random() * max) + min);
    return (
        <div className="randomCard">
            <p>Random value between {min} and {max} => {value}</p>
        </div>
    )
}

export default Random