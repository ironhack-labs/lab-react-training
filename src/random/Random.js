import React from 'react';

import './Random.css';

function Random(props){
return(
    <div className="random">
        <p>Random value between {props.min} and {props.max} => {props.random}</p>
    </div>
)
}

export default Random;