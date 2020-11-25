import React from 'react'
import { useState } from 'react';

export const Dice = () => {
    let imgDefaul='/img/dice-empty.png' 
    let [value, setValue]= useState(imgDefaul)
const dice=[
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png'
]

let randy=()=>{
    value=dice[Math.floor(Math.random() * (6 - 1)) + 1]
    setValue(value)
}

    return (
        <div>
            <img src={value} onClick={randy}/>
        </div>
    )
}

export default Dice

