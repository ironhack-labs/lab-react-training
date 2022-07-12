import { useState } from 'react'
import './Dice.css'

import dice0 from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

const Dice = () => {

    const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6]
    const index = Math.floor(Math.random() * diceFaces.length)
    
    const [diceFace, setDiceFace] = useState(dice3)

    const rollDice = () => {
        setDiceFace(dice0)
        setTimeout(() => setDiceFace(diceFaces[index]), 1000) 
    }
    
    return (
        <img onClick={rollDice} src={diceFace} />
    )
}

export default Dice