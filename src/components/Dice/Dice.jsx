import { useState } from 'react'
import './Dice.css'

import Dice1 from './../../assets/images/dice1.png'
import Dice2 from './../../assets/images/dice2.png'
import Dice3 from './../../assets/images/dice3.png'
import Dice4 from './../../assets/images/dice4.png'
import Dice5 from './../../assets/images/dice5.png'
import Dice6 from './../../assets/images/dice6.png'
import Dice_empty from './../../assets/images/dice-empty.png'

const Dice = () => {

    const imgArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const rollDice = () => {
        setDiceValue(Dice_empty)
        setTimeout(() => setDiceValue(imgArray[randomImg]), 1000)
    }

    const randomImg = Math.floor(Math.random() * imgArray.length)

    const [diceValue, setDiceValue] = useState(Dice3)

    return (
        <img onClick={rollDice} src={diceValue} alt="" />
    )



}


export default Dice