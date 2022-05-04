import { useState } from 'react'
import './style.css'


const Dice = () => {

    const [diceImgValue, setDiceImgValue] = useState('./../../dice1.png')

    const whiteDice = () => {
        
        let delayTime 

        setDiceImgValue('./../../dice-empty.png')
        
        delayTime = setTimeout(randomDice, 1000)
    }

    const randomDice = () => {

        let randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
        let randomDice = `./../../dice${randomNumber}.png`

        setDiceImgValue(randomDice)
    }


    return (
        <>
            <img className="dicePic" onClick={whiteDice} src={diceImgValue} alt="random dice" />
        </>
    )
}

export default Dice
