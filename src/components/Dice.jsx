import { useState } from 'react'
import './Dice.css'

import dice0 from './../assets/images/dice-empty.png'
import dice1 from './../assets/images/dice1.png'
import dice2 from './../assets/images/dice2.png'
import dice3 from './../assets/images/dice3.png'
import dice4 from './../assets/images/dice4.png'
import dice5 from './../assets/images/dice5.png'
import dice6 from './../assets/images/dice6.png'


const Dice = () => {
    const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]



    const [showDice, setShowDice] = useState(dice0)
    const handleShowDice = () => {
        setShowDice(dice0)
        setTimeout(() => {
            const randomNumber = diceArr[Math.floor(Math.random() * diceArr.length)]
            setShowDice(randomNumber)

        }, 1000)

    }
    return (
        <img onClick={handleShowDice} src={showDice} alt='dice' width='100px' />

    )
}


export default Dice
