import React from 'react'
import './Dice.css'

const Dice = (props) => {
    const {dice, getRandomDice}= props
    const diceName = dice.split('/').slice(-1)[0].split('.')[0]
    // console.log("Output for: Dice -> diceName", diceName)
    return (
        <div className='container'>
            <h2>Iteration 10: State: Dice</h2>
            <hr/>
            <div>
                <img src={dice} onClick={getRandomDice} alt={diceName}/>
            </div>
        </div>
    )
}

export default Dice
