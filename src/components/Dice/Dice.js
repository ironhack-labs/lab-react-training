import './Dice.css'
import { useState } from 'react';

import diceEmpty from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'


const Dice = () => {

    const diceAllValues = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
    const randomFace = diceAllValues[Math.floor(Math.random() * diceAllValues.length)]
    const [value, setValue] = useState(diceEmpty)

    const handleClick = () => {

        setValue(diceEmpty)

        setTimeout(() => {
            return setValue(randomFace)
        }, 1000)
    }

    return (
        <img
            src={value}
            onClick={handleClick}
            className='dicePicture'
            alts='dados'
        />
    )
}

export default Dice


/* const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)
    const handleClick = () => {
        setGlasses(!glasses)
    }

    return (
        <img
            src={glasses ? glassesOnImg : glassesOffImg}
            onClick={handleClick}
            className="ClickablePicture"
            alt="gafas"
        />
    )
} */
