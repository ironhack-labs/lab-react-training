import './Dice.css'
import diceEmpty from '../../assets/images/dice-empty.png'
import diceImg1 from '../../assets/images/dice1.png'
import diceImg2 from '../../assets/images/dice2.png'
import diceImg3 from '../../assets/images/dice3.png'
import diceImg4 from '../../assets/images/dice4.png'
import diceImg5 from '../../assets/images/dice5.png'
import diceImg6 from '../../assets/images/dice6.png'

import { useState } from 'react'
import { useEffect } from 'react'

const Dice = () => {

    //const [roll, setRoll] = useState(0)
    const [diceImg, setDiceImg] = useState(diceEmpty)
    const diceImages = [diceEmpty, diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6]
    useEffect(() => {
        if (diceImg === diceEmpty) {
            setTimeout(reRoll, 1000)
        }

    });

    const reRoll = () => {
        const randomRoll = Math.floor(Math.random() * (6) + 1)
        setDiceImg(diceImages[randomRoll])
    }

    const diceHandler = () => {
        setDiceImg(diceEmpty)
    }

    return (
        <img onClick={diceHandler} src={diceImg} alt="" className="Dice" />
    )
}

export default Dice