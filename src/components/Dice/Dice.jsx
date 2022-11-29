import './Dice.css'
import { useState } from 'react'

import dice0 from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]

const Dice = () => {

    const [initialPos, setDice] = useState()

    const rollDice = Math.floor(Math.random() * diceImages.length)

    const handleRollDice = () => setDice(!initialPos)

    return (
        <div className='Dice'>
            <img onClick={handleRollDice} src={initialPos ? dice6 : diceImages[rollDice]} alt="dice" />
            
            </div>
    )
}

export default Dice 