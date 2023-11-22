
import { useState } from "react"

import DiceE from '../../assets/dice-empty.png'

import DiceOne from '../../assets/dice1.png'

import DiceTwo from '../../assets/dice2.png'

import DiceThree from '../../assets/dice3.png'

import DiceFour from '../../assets/dice4.png'

import DiceFive from '../../assets/dice5.png'

import DiceSix from '../../assets/dice6.png'

const Dice = ({ }) => {

    const many = [DiceE, DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix]

    const [Dice, setDice] = useState(DiceE)


    const handleClick = () => {

        const randomDice = Math.floor(Math.random() * many.length)

        setDice(many[randomDice])

    }


    return (
        <div className="DicePicture" onClick={handleClick}>

            <img src={Dice} style={{ width: '200px' }} />

        </div>



    )
}

export default Dice 