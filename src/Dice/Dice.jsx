import './Dice.css'
import { useState } from 'react'


function Dice() {

    const [diceImgValue, setDiceImgValue] = useState('../../images/dice1.png')

    const whiteDice = () => {
        let delayTime

        setDiceImgValue('../../images/dice-empty.png')

        delayTime = setTimeout(randomDice, 1000)
    }

    const randomDice = () => {
        let randomNumber = Math.floor(Math.random() * (6 - 1)) + 1
        let randomDice = `../../images/dice${randomNumber}.png`

        setDiceImgValue(randomDice)
    }

    return (
        <div>
            <img className="dice-img" onClick={whiteDice} src={diceImgValue} alt="dice img" />
        </div>
    );
}

export default Dice
