
import React from 'react';

export function Random({min, max}) {
    console.log(min, max)
    return (
        <p>{Math.floor(Math.random() * (max - min) + min)}</p>
    )
}