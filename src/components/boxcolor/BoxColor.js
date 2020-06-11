import React from 'react';
import './BoxColor.css';

//its functional, doesnt need extending component, dosnt have state
function BoxColor(props){

// const getRandomInt = (min, max) => {
// min = Math.ceil(min);
// max = Math.floor(max);
// return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// ${props.r = getRandomInt(0, 255) },
// ${props.g = getRandomInt(0, 255) },
// ${props.b = getRandomInt(0, 255) }

    return (
        <div className="Box" style={{ background: `rgb(
            ${props.r},
            ${props.g },
            ${props.b}
        )`
        }}>
            {props.children}
        </div>
        
    )
}
export default BoxColor;