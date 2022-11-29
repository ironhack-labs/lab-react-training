import { useState } from 'react'
import './Dice.css'

import DiceEmpty from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'

const Dice = () => {

    const dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const randomNumber = Math.floor(Math.random() * dice.length)

    const [currentDice, setCurrentDice] = useState(Dice3)

    const rollDice = () => {
        setCurrentDice(DiceEmpty)
        setTimeout(() => {
            setCurrentDice(dice[randomNumber])
        }, 1000)
    }

    return (
        <section className='Dice'>
            <img onClick={rollDice} src={currentDice} alt="dice" />
        </section>
    )

}

export default Dice