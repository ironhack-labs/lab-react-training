import React, { useState } from 'react';


function Like(){
    let cols =['purple','blue','green','yellow','orange','red']
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(cols[1]);
    return(   
    <div >
        <button className={'Like ' + color} onClick={(event)=> {
            setColor((prevColor) => cols[cols.indexOf(prevColor) + 1])
            setCount((prevCount) => prevCount + 1)}}>
            {count} Likes
        </button>
    </div>)
}

export default Like