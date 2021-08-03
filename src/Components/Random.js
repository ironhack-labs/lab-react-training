import React from 'react';

const Random = (props) => {
    
    const randomNumber = (min,máx) => {
        min = Math.ceil(min);
        máx = Math.floor(máx);
        return Math.floor(Math.random() * (máx-min)) + min; 
    }

    return (
        <>
            <h2> Random value  between {props.min} and {props.máx} => {randomNumber(props.min,props.máx)}</h2>
        </>
    )
}

export default Random