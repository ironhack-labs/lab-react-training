import "./index.css";
import React from 'react';


function Random({ minN, maxN }) {
    let randomN = Math.floor(Math.random() * (maxN - minN + 1) + minN)
    return (
        <div className="random-container">
            <h3>Random value between {minN} and {maxN} = {randomN}</h3>
        </div>
    )
}

export default Random;

