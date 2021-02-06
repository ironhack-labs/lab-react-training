import React from 'react';

function Random({min, max}) {
    console.log("min", min)
    console.log('max', max)
    let randomNum = Math.random() * (max-min)+min
    
    return (
        <div>
            <p>Random value between {min} and {max} : { randomNum }</p>
        </div>
    )
}

export default Random;
