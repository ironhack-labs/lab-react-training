import './Dice.css'
import dice from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import { useState } from 'react'


const Dice = () => {

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]


    let diceRandom = dices[Math.floor(Math.random() * dices.length)]
    const [diceValue, setDiceValue] = useState(dice3)
    const rollDice = () => {
        setDiceValue(dice)
        setTimeout(() => {
            setDiceValue(diceRandom)
        }, 1000);
    }

    return <><img src={diceValue} onClick={rollDice} alt="dice" className="dice" /></>
}

export default Dice
