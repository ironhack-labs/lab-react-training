import { useState } from 'react'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'
import diceEmpty from '../../assets/images/dice-empty.png'
import './dice.css'

const Dice = () => {
    const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomDice = () => {
        return dice[Math.floor(Math.random() * dice.length)]
    }

    const [diceScore, setDiceScore] = useState(randomDice());

    const handleClick = () => {
        setDiceScore(diceEmpty)
        setTimeout(() => setDiceScore(randomDice()), 1000)
    }

    return (
        <div className="dice" >
            <img src={diceScore} alt='random-dice' onClick={handleClick} />
        </div >
    )
}

export default Dice