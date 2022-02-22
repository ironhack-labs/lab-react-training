import './Dice.css'
import { useState } from 'react'

import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'


const Dice = () => {

    const [diceNumber, getRandomDice] = useState(dice3)
    const getRandom = () => getRandomDice(diceArray[Math.floor(Math.random() * diceArray.length)])
    const firstChange = () => emptyDice    // Esta función mal

    const diceArray = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6]

    const setTime = () => {
        setTimeout(() => {
            firstChange()            // por eso esto no me funciona
            setTimeout(() => {
                getRandom()
            }, 2)
        }, 1000)

    }

    return (
        <div className='Dice'>


            <button onClick={() => { setTime() }}>
                <img src={diceNumber} alt="diceImage"></img>
            </button>


        </div>
    )
}

export default Dice

