import './Dice.css'
import { useState } from 'react'

import none from './../../assets/images/dice-empty.png'
import one from './../../assets/images/dice1.png'
import two from './../../assets/images/dice2.png'
import three from './../../assets/images/dice3.png'
import four from './../../assets/images/dice4.png'
import five from './../../assets/images/dice5.png'
import six from './../../assets/images/dice6.png'

const Dice = () => {
    const [face, setFace] = useState(none)
    const diceArray = [one, two, three, four, five, six]

    const randomDice = diceArray[Math.floor(Math.random() * diceArray.length)]

    const handleClick = () => {
        setFace(none)
        setTimeout(() => {
            return setFace(randomDice)
        }, 1000)
    }

    return (
        <img
            src={face}
            onClick={handleClick}
            className="dice"
            alt="dices"
        />
    )
}

export default Dice