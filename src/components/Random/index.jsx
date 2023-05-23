import React from "react";
import './index.css'
const Random = ({min, max}) =>{
    const randomNumber = Math.floor(Math.random() * (max-min));
    return (
        <div>
            <p className="random">Random value between {min} and {max} =&gt; {randomNumber}</p>
        </div>
    )
}

export default Random;