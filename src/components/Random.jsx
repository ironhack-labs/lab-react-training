import React from 'react';

function Random(props) {

    const min = props.min;
    const max = props.max;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    
    

    return (
        <div className="random">
        <h3>Random value between {min} and {max} => {random }</h3>
     </div>
    )
    
}

export default Random;