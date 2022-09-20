import React from 'react';
import './Random.css'

function Random({min, max}) {

    function randomFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const randomNum = randomFromInterval(min, max)
      
    return (
        <div className="Random-card">
            <p>Random value between {min} and {max} ={'>'} {randomNum}</p>
        </div>
    )
}

export default Random;