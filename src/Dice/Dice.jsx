import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import emptyDice from '../assets/images/dice-empty.png'
import { useState } from 'react'

const Dice = () => {

    const [diceNum, setDiceNum] = useState(dice3)

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]
    let randomDice = diceArray[Math.floor(Math.random() * 5)]

    const changeNum = () => {
        setDiceNum(emptyDice)
        setTimeout(() => setDiceNum(randomDice), 1000)

    }

    return (
        <img onClick={changeNum} src={diceNum} alt="dice" />
    )
}

export default Dice