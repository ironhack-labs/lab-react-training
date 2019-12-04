import React from 'react';

import { RandomN } from '../styles/components';

function RandomComponent(props) {
    const random = Math.floor(Math.random()* (props.max - props.min) + props.min);
    
    return(
        <RandomN>
            <p>Random value between {props.max} and {props.min} => {random} </p>
        </RandomN>
    );
}

export default RandomComponent;