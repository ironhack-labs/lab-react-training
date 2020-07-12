import React, { useState } from 'react'

export default function Dice() {

    
    const initialState = {
        img: '/img/dice-empty.png',
        dices : [
            '/img/dice1.png',
            '/img/dice2.png',
            '/img/dice3.png',
            '/img/dice4.png',
            '/img/dice5.png',
            '/img/dice6.png'
        ]
    }
    const [state, setState] = useState(initialState)
    
    const handleChange = async () => {
        await window.setTimeout(() => {
            setState(state => ({...state, img: state.dices[Math.floor(Math.random() * 6)]})) 
         }, 1)
       
        window.setTimeout(() => {
            setState(state => ({...state, img: state.dices[Math.floor(Math.random() * 6)]}))
         }, 1000)

         
    }
    return (
        <div className="Dice">
            <React.StrictMode />
            <img src={state.img} alt="" onClick={handleChange}/>
        </div>
    )
}
