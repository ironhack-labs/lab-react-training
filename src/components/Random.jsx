import React from 'react';

const Random = ({min,max})=>{
    let r = Math.floor(Math.random()*max+min)
    return(
        <div>
            <p>Random number between {min} and {max} is {r}</p>
        </div>
    ) 
}

export default Random